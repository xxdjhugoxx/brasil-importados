// Brasil Importados — Main JS (Cart + Shared Logic)

(function() {
    'use strict';

    // ===== CART STATE =====
    let cart = JSON.parse(localStorage.getItem('cart') || '[]');

    function saveCart() {
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartBadge();
    }

    function updateCartBadge() {
        const badge = document.querySelector('.cart-badge');
        if (!badge) return;
        const total = cart.reduce((sum, item) => sum + item.qty, 0);
        badge.textContent = total;
        badge.classList.toggle('hidden', total === 0);
    }

    function addToCart(productId, qty = 1) {
        const product = window.products.find(p => p.id === productId);
        if (!product) return;

        const existing = cart.find(item => item.id === productId);
        if (existing) {
            existing.qty += qty;
        } else {
            cart.push({ id: productId, qty });
        }
        saveCart();
        renderCart();
        openCart();
    }

    function removeFromCart(productId) {
        cart = cart.filter(item => item.id !== productId);
        saveCart();
        renderCart();
    }

    function updateQty(productId, delta) {
        const item = cart.find(i => i.id === productId);
        if (!item) return;
        item.qty += delta;
        if (item.qty <= 0) {
            removeFromCart(productId);
        } else {
            saveCart();
            renderCart();
        }
    }

    function getCartTotal() {
        return cart.reduce((sum, item) => {
            const product = window.products.find(p => p.id === item.id);
            return sum + (product ? product.price * item.qty : 0);
        }, 0);
    }

    function renderCart() {
        const container = document.querySelector('.cart-items');
        const subtotalEl = document.querySelector('.cart-subtotal-value');
        if (!container) return;

        if (cart.length === 0) {
            container.innerHTML = `
                <div class="cart-empty">
                    <div class="cart-empty-icon">🛒</div>
                    <p>Seu carrinho está vazio</p>
                </div>`;
            if (subtotalEl) subtotalEl.textContent = 'R$ 0';
            return;
        }

        container.innerHTML = cart.map(item => {
            const product = window.products.find(p => p.id === item.id);
            if (!product) return '';
            return `
                <div class="cart-item" data-id="${product.id}">
                    <img src="${product.image}" alt="${product.name}" class="cart-item-img">
                    <div class="cart-item-info">
                        <div class="cart-item-name">${product.name}</div>
                        <div class="cart-item-price">${formatPrice(product.price)}</div>
                        <div class="cart-item-controls">
                            <button class="qty-btn" onclick="window.updateQty(${product.id}, -1)">−</button>
                            <span class="qty-value">${item.qty}</span>
                            <button class="qty-btn" onclick="window.updateQty(${product.id}, 1)">+</button>
                        </div>
                    </div>
                    <button class="cart-item-remove" onclick="window.removeFromCart(${product.id})">✕</button>
                </div>`;
        }).join('');

        if (subtotalEl) subtotalEl.textContent = formatPrice(getCartTotal());
    }

    function openCart() {
        document.querySelector('.cart-overlay')?.classList.add('open');
        document.querySelector('.cart-sidebar')?.classList.add('open');
        document.body.style.overflow = 'hidden';
    }

    function closeCart() {
        document.querySelector('.cart-overlay')?.classList.remove('open');
        document.querySelector('.cart-sidebar')?.classList.remove('open');
        document.body.style.overflow = '';
    }

    function finalizeCart() {
        if (cart.length === 0) return;
        const items = cart.map(item => {
            const product = window.products.find(p => p.id === item.id);
            return `• ${product?.name} x${item.qty} (${formatPrice(product?.price)})`;
        }).join('\n');
        const total = formatPrice(getCartTotal());
        const msg = encodeURIComponent(`🛒 *Novo Pedido*\n\n${items}\n\n*Total: ${total}*\n\nQuero finalizar este pedido!`);
        window.open(`https://wa.me/5511999999999?text=${msg}`, '_blank');
    }

    // Expose to global
    window.addToCart = addToCart;
    window.removeFromCart = removeFromCart;
    window.updateQty = updateQty;
    window.openCart = openCart;
    window.closeCart = closeCart;
    window.finalizeCart = finalizeCart;
    window.getCartTotal = getCartTotal;

    // ===== CART SIDEBAR EVENTS =====
    document.addEventListener('DOMContentLoaded', () => {
        updateCartBadge();
        renderCart();

        document.querySelector('.cart-overlay')?.addEventListener('click', closeCart);
        document.querySelector('.cart-close')?.addEventListener('click', closeCart);

        // ESC closes cart
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') closeCart();
        });
    });

    // ===== PRODUCT CARD HELPER =====
    window.renderProductCard = function(product) {
        const discount = product.originalPrice
            ? Math.round((1 - product.price / product.originalPrice) * 100)
            : 0;
        return `
            <div class="product-card" onclick="window.location.href='product.html?id=${product.id}'">
                <div class="product-card-img-wrap">
                    <img src="${product.image}" alt="${product.name}" class="product-card-img" loading="lazy">
                    ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
                </div>
                <div class="product-card-body">
                    <div class="product-card-category">${product.category}</div>
                    <div class="product-card-name">${product.name}</div>
                    <div class="product-card-rating">
                        <span class="star">★</span> ${product.rating} <span class="text-muted">(${product.reviews})</span>
                    </div>
                    <div class="product-card-footer">
                        <div class="product-price">
                            <span class="price-current">${formatPrice(product.price)}</span>
                            ${product.originalPrice ? `<span class="price-old">${formatPrice(product.originalPrice)}</span>` : ''}
                        </div>
                        <button class="add-cart-btn" onclick="event.stopPropagation(); addToCart(${product.id})">
                            Adicionar 🛒
                        </button>
                    </div>
                </div>
            </div>`;
    };

    // ===== COUNTDOWN TIMER =====
    window.initCountdown = function(targetDate, elId) {
        const el = document.getElementById(elId);
        if (!el) return;

        function update() {
            const now = new Date();
            const target = new Date(targetDate);
            const diff = target - now;

            if (diff <= 0) {
                el.innerHTML = '<span class="countdown-num">00</span><span class="countdown-label">Dias</span>';
                return;
            }

            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            const secs = Math.floor((diff % (1000 * 60)) / 1000);

            el.innerHTML = `
                <div class="countdown-item"><span class="countdown-num">${String(days).padStart(2,'0')}</span><span class="countdown-label">Dias</span></div>
                <div class="countdown-item"><span class="countdown-num">${String(hours).padStart(2,'0')}</span><span class="countdown-label">Horas</span></div>
                <div class="countdown-item"><span class="countdown-num">${String(mins).padStart(2,'0')}</span><span class="countdown-label">Min</span></div>
                <div class="countdown-item"><span class="countdown-num">${String(secs).padStart(2,'0')}</span><span class="countdown-label">Seg</span></div>`;
        }

        update();
        setInterval(update, 1000);
    };

    // ===== ACTIVE NAV =====
    window.setActiveNav = function() {
        const path = window.location.pathname.split('/').pop() || 'index.html';
        document.querySelectorAll('.nav-links a').forEach(link => {
            const href = link.getAttribute('href');
            link.classList.toggle('active', href === path || (path === '' && href === 'index.html'));
        });
    };

})();

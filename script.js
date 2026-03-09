// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileToggle = document.querySelector('.mobile-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (mobileToggle) {
        mobileToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }

    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });

    // Crypto payment dropdown logic
    const cryptoSelect = document.getElementById('crypto-select');
    const paymentDetails = document.getElementById('payment-details');
    const cryptoName = document.getElementById('crypto-name');
    const cryptoAddress = document.getElementById('crypto-address');

    // Wallet addresses (replace with actual addresses in production)
    const walletAddresses = {
        btc: {
            name: 'Bitcoin (BTC)',
            address: 'bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh'
        },
        ltc: {
            name: 'Litecoin (LTC)',
            address: 'ltc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh'
        },
        eth: {
            name: 'Ethereum (ERC-20)',
            address: '0x71C7656EC7ab88b098defB751B7401B5f6d8976F'
        },
        usdt: {
            name: 'USDT (ERC-20)',
            address: '0x71C7656EC7ab88b098defB751B7401B5f6d8976F'
        },
        bnb: {
            name: 'BNB (BEP-20)',
            address: 'bnb1xy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh'
        }
    };

    if (cryptoSelect) {
        cryptoSelect.addEventListener('change', function() {
            const selected = this.value;
            
            if (selected && walletAddresses[selected]) {
                const wallet = walletAddresses[selected];
                cryptoName.textContent = wallet.name;
                cryptoAddress.textContent = wallet.address;
                paymentDetails.classList.remove('hidden');
            } else {
                paymentDetails.classList.add('hidden');
            }
        });
    }
});

// Copy address function
function copyAddress() {
    const address = document.getElementById('crypto-address').textContent;
    navigator.clipboard.writeText(address).then(() => {
        const btn = document.querySelector('.copy-btn');
        const originalText = btn.textContent;
        btn.textContent = 'Copied!';
        setTimeout(() => {
            btn.textContent = originalText;
        }, 2000);
    });
}

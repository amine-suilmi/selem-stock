// SelemExpress e-Stock MVP Prototype
// Interactive JavaScript for UI demonstration

// Global state management
const state = {
    stocks: {
        1: 12,
        2: 8,
        3: 15
    },
    modelsSaved: {
        1: false,
        2: false,
        3: false
    },
    pendingOrders: 2,
    currentScanModel: null
};

// Screen Navigation
function showScreen(screenId) {
    // Hide all screens
    const screens = ['welcome-screen', 'shop-owner-dashboard', 'admin-dashboard', 'qr-scanner'];
    screens.forEach(screen => {
        document.getElementById(screen).classList.add('hidden');
    });
    
    // Show selected screen
    document.getElementById(screenId).classList.remove('hidden');
    
    // Scroll to top
    window.scrollTo(0, 0);
}

// Shop Owner Dashboard Functions

// Update stock manually
function updateStock(modelId) {
    const currentStock = state.stocks[modelId];
    const newStock = prompt(`Current stock: ${currentStock}\n\nEnter new stock quantity:`, currentStock);
    
    if (newStock !== null && !isNaN(newStock) && newStock >= 0) {
        state.stocks[modelId] = parseInt(newStock);
        document.getElementById(`stock-${modelId}`).textContent = newStock;
        showToast(`Stock updated to ${newStock} pairs`);
    }
}

// Deduct stock when sold in store
function soldInStore(modelId) {
    if (state.stocks[modelId] > 0) {
        state.stocks[modelId]--;
        document.getElementById(`stock-${modelId}`).textContent = state.stocks[modelId];
        showToast('Sold 1 pair in store! Stock updated.');
    } else {
        alert('⚠️ Out of stock! Cannot deduct.');
    }
}

// Confirm online order
function confirmOrder(orderId, modelId) {
    if (state.stocks[modelId] <= 0) {
        alert('⚠️ Cannot confirm order - insufficient stock!');
        return;
    }
    
    const confirmAction = confirm('✅ Confirm this order?\n\n• Stock will be reserved\n• Customer will be notified\n• Item ready for pickup today');
    
    if (confirmAction) {
        // Deduct stock
        state.stocks[modelId]--;
        document.getElementById(`stock-${modelId}`).textContent = state.stocks[modelId];
        
        // Remove order from pending list
        const orderElement = document.querySelector(`[data-order-id="${orderId}"]`);
        orderElement.style.opacity = '0';
        orderElement.style.transform = 'scale(0.9)';
        
        setTimeout(() => {
            orderElement.remove();
            state.pendingOrders--;
            document.getElementById('pending-count').textContent = state.pendingOrders;
            
            // Show no orders message if all confirmed
            if (state.pendingOrders === 0) {
                document.getElementById('pending-orders').classList.add('hidden');
                document.getElementById('no-orders').classList.remove('hidden');
            }
        }, 300);
        
        showToast('✅ Order confirmed! Stock reserved for pickup.');
    }
}

// Admin Panel Functions

// Save individual model
function saveModel(modelId) {
    const name = document.getElementById(`name-${modelId}`).value;
    const brand = document.getElementById(`brand-${modelId}`).value;
    const price = document.getElementById(`price-${modelId}`).value;
    const initialStock = document.getElementById(`initial-stock-${modelId}`).value;
    
    if (!name || !brand || !price || !initialStock) {
        alert('⚠️ Please fill all fields for Model ' + modelId);
        return;
    }
    
    // Mark as saved
    state.modelsSaved[modelId] = true;
    document.getElementById(`saved-${modelId}`).classList.remove('hidden');
    
    // Check if all models are saved to enable publish button
    checkPublishReady();
    
    showToast(`✅ Model ${modelId} saved successfully!`);
}

// Check if all 3 models are saved
function checkPublishReady() {
    const allSaved = state.modelsSaved[1] && state.modelsSaved[2] && state.modelsSaved[3];
    const publishBtn = document.getElementById('publish-btn');
    
    if (allSaved) {
        publishBtn.disabled = false;
        publishBtn.classList.add('animate-pulse');
    }
}

// Publish all models to shop
function publishModels() {
    const confirmPublish = confirm('🚀 Publish these 3 models to the shop?\n\n• Models will appear in shop owner dashboard\n• Previous week models will be archived\n• This action cannot be undone');
    
    if (confirmPublish) {
        // Simulate publishing process
        const publishBtn = document.getElementById('publish-btn');
        publishBtn.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>Publishing...';
        publishBtn.disabled = true;
        
        setTimeout(() => {
            showToast('🎉 Models published successfully! Shop owner can now see them.');
            
            // Reset form after publishing
            setTimeout(() => {
                if (confirm('✅ Published!\n\nView the models in Shop Owner Dashboard?')) {
                    showScreen('shop-owner-dashboard');
                }
            }, 1500);
        }, 2000);
    }
}

// QR Scanner Functions

// Simulate QR code scan
function simulateScan(modelName, modelId) {
    state.currentScanModel = modelId;
    
    // Update modal content
    document.getElementById('scanned-model-name').textContent = modelName;
    document.getElementById('current-stock-qr').textContent = state.stocks[modelId];
    document.getElementById('new-stock-qr').textContent = state.stocks[modelId] - 1;
    
    // Show modal with animation
    const modal = document.getElementById('scan-result-modal');
    modal.classList.remove('hidden');
    modal.style.opacity = '0';
    
    setTimeout(() => {
        modal.style.transition = 'opacity 0.3s';
        modal.style.opacity = '1';
    }, 10);
}

// Confirm sale from QR scan
function confirmQRSale() {
    const modelId = state.currentScanModel;
    
    if (state.stocks[modelId] > 0) {
        state.stocks[modelId]--;
        document.getElementById(`stock-${modelId}`).textContent = state.stocks[modelId];
        
        closeModal();
        showToast('✅ Sale confirmed! Stock updated via QR scan.');
        
        // Return to dashboard after 2 seconds
        setTimeout(() => {
            showScreen('shop-owner-dashboard');
        }, 2000);
    } else {
        alert('⚠️ Out of stock!');
        closeModal();
    }
}

// Close modal
function closeModal() {
    const modal = document.getElementById('scan-result-modal');
    modal.style.opacity = '0';
    
    setTimeout(() => {
        modal.classList.add('hidden');
        state.currentScanModel = null;
    }, 300);
}

// UI Helper Functions

// Show success toast notification
function showToast(message) {
    const toast = document.getElementById('success-toast');
    const messageEl = document.getElementById('toast-message');
    
    messageEl.textContent = message;
    toast.classList.remove('hidden');
    
    setTimeout(() => {
        toast.style.opacity = '1';
    }, 10);
    
    setTimeout(() => {
        toast.style.opacity = '0';
        setTimeout(() => {
            toast.classList.add('hidden');
        }, 300);
    }, 3000);
}

// Add smooth transitions on load
document.addEventListener('DOMContentLoaded', function() {
    // Add transition styles
    const style = document.createElement('style');
    style.textContent = `
        [data-order-id] {
            transition: all 0.3s ease;
        }
        #success-toast {
            transition: opacity 0.3s ease;
        }
    `;
    document.head.appendChild(style);
    
    console.log('🎉 SelemExpress e-Stock MVP Prototype loaded!');
    console.log('📱 This is a visual mockup for UI refinement');
    console.log('🚀 Navigate between Shop Owner, Admin, and QR Scanner views');
});

// Demo data prefill for admin forms (optional, for quick testing)
function prefillDemoData() {
    const demoData = {
        1: { name: 'Nike Air Max 2024', brand: 'Nike', price: '180', stock: '12' },
        2: { name: 'Adidas Ultraboost', brand: 'Adidas', price: '220', stock: '8' },
        3: { name: 'Puma RS-X Elite', brand: 'Puma', price: '150', stock: '15' }
    };
    
    Object.keys(demoData).forEach(id => {
        document.getElementById(`name-${id}`).value = demoData[id].name;
        document.getElementById(`brand-${id}`).value = demoData[id].brand;
        document.getElementById(`price-${id}`).value = demoData[id].price;
        document.getElementById(`initial-stock-${id}`).value = demoData[id].stock;
    });
    
    showToast('📝 Demo data filled! Click Save on each model.');
}

// Keyboard shortcut for quick navigation (optional)
document.addEventListener('keydown', function(e) {
    // Press '1' for Shop Owner, '2' for Admin, '3' for QR Scanner
    if (e.key === '1' && !e.target.matches('input, textarea')) {
        showScreen('shop-owner-dashboard');
    } else if (e.key === '2' && !e.target.matches('input, textarea')) {
        showScreen('admin-dashboard');
    } else if (e.key === '3' && !e.target.matches('input, textarea')) {
        showScreen('qr-scanner');
    } else if (e.key === 'h' && !e.target.matches('input, textarea')) {
        showScreen('welcome-screen');
    }
});

// Export for testing
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        showScreen,
        updateStock,
        soldInStore,
        confirmOrder,
        saveModel,
        publishModels,
        simulateScan,
        confirmQRSale,
        prefillDemoData
    };
}

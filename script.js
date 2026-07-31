// Interactive Order Button Action
function handleOrder() {
    const btn = document.getElementById('orderBtn');
    const status = document.getElementById('orderStatus');
    
    btn.innerText = 'Added to Cart! 🛒';
    btn.style.backgroundColor = '#1b5e20';
    status.innerText = 'Thank you for choosing FitBlend! Redirecting to checkout...';
    
    setTimeout(() => {
        btn.innerText = 'Order Now';
        btn.style.backgroundColor = '#2e7d32';
        status.innerText = '';
    }, 3000);
}

// Nutrition Estimator Calculator
function calculateNutrition() {
    const type = document.getElementById('drinkType').value;
    const result = document.getElementById('calcResult');

    if (type === 'protein') {
        result.innerText = '⏱️ Recommended Blending Time: 25 - 30 Seconds | 📊 Est. Calories: ~160 kcal (Protein Focus)';
    } else if (type === 'smoothie') {
        result.innerText = '⏱️ Recommended Blending Time: 45 - 60 Seconds | 📊 Est. Calories: ~250 kcal (Energy Focus)';
    } else if (type === 'detox') {
        result.innerText = '⏱️ Recommended Blending Time: 20 Seconds | 📊 Est. Calories: ~45 kcal (Low Calorie Focus)';
    }
}
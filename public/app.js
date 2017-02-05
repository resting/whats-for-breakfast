var __food = {
    bf: [
        'Bak ku teh',
        'Bak chor mee',
        'Carrot cake',
        'Prata',
        'Mee hoon kuay',
        'Fishball noodle',
        'Mcdonalds',
        'KFC',
        'Breadtalk',
        'Cereal',
        'Salad',
        'Toast and egg',
        'Porridge',
        'Bee Hoon, hot dog + chicken wing'
    ]
};

(function() {
    const bf_idea = document.getElementById('bf-idea');

    function getFood() {
        const food =  __food.bf[Math.floor(Math.random() * __food.bf.length)];

        bf_idea.innerHTML = food + ' ??';
    }

    $('.btn-next-js').on('click', function() {
        getFood();
    });

    getFood();
}());

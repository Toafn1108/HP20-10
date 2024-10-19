document.addEventListener("DOMContentLoaded", function() {
    const image = document.querySelector('.image');
    image.addEventListener('mouseover', function() {
        image.style.transform = "scale(1.1)";
    });
    image.addEventListener('mouseout', function() {
        image.style.transform = "scale(1)";
    });

    // Tạo hiệu ứng cánh hoa nhô lên
    const flowerContainer = document.getElementById('flower-container');

    function createFlower() {
        const flower = document.createElement('div');
        flower.classList.add('flower');

        // Vị trí ngẫu nhiên trên trục X
        flower.style.left = Math.random() * 100 + 'vw';
        flower.style.width = Math.random() * 15 + 10 + 'px'; // Kích thước ngẫu nhiên
        flower.style.height = flower.style.width; // Để giữ hình dạng tròn

        // Thời gian rơi ngẫu nhiên
        flower.style.animationDuration = Math.random() * 3 + 3 + 's';

        flowerContainer.appendChild(flower);

        // Xóa cánh hoa khi kết thúc hoạt động
        setTimeout(() => {
            flower.remove();
        }, 5000);
    }

    setInterval(createFlower, 300); // Tạo nhiều cánh hoa mỗi 0.3 giây

    // Hiệu ứng trái tim khi click vào hình ảnh
    image.addEventListener('click', function(event) {
        createHeart(event.clientX, event.clientY);
    });

    function createHeart(x, y) {
        const heart = document.createElement('div');
        heart.classList.add('heart');

        // Đặt vị trí trái tim tại điểm click
        heart.style.left = x - 10 + 'px'; // Canh chỉnh trái tim vào giữa vị trí click
        heart.style.top = y - 10 + 'px'; // Canh chỉnh trái tim vào giữa vị trí click

        document.body.appendChild(heart);

        // Xóa trái tim sau khi hoàn thành animation
        setTimeout(() => {
            heart.remove();
        }, 2000);
    }
});
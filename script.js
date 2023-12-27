function runNumberAnimation() {
    let cardElements = document.getElementsByClassName('card-animation');

    for (let i = 0; i < cardElements.length; i++) {
        let cardElement = cardElements[i];
        let numberElement = cardElement.querySelector('.item1');
        let targetNumber = parseInt(numberElement.innerText);

        let currentNumber = 0;
        let intervalId = setInterval(function() {
            if (currentNumber === targetNumber) {
                clearInterval(intervalId);
            } else {
                currentNumber++;
                numberElement.innerText = currentNumber;
            }
        }, 3000 / targetNumber); // Tính toán thời gian để số chạy từ 0 đến số mục tiêu trong 1 giây
    }
}
runNumberAnimation()

// chuyển đổi button và box tương ứng
window.addEventListener('DOMContentLoaded', function() {
    var buttons = document.querySelectorAll('.buttons');
    var boxes = document.querySelectorAll('.box');
    var currentIndex = 0; // Chỉ số của box hiện tại
    var intervalId; // ID của setInterval

    // Hàm để chuyển đổi box và button tương ứng
    function switchBox(index) {
        // Ẩn tất cả các box và đặt tất cả các button về trạng thái không kích hoạt
        boxes.forEach(function(box) {
            box.style.display = 'none';
        });
        buttons.forEach(function(btn) {
            btn.classList.remove('active');
        });

        // Hiển thị box và kích hoạt button tương ứng
        boxes[index].style.display = 'block';
        buttons[index].classList.add('active');
    }

    // Hàm để chuyển đổi tự động
    function autoSwitch() {
        currentIndex++; // Tăng chỉ số hiện tại
        if (currentIndex >= boxes.length) {
            currentIndex = 0; // Nếu chỉ số hiện tại vượt quá số lượng box, quay lại box đầu tiên
        }
        switchBox(currentIndex); // Chuyển đổi box và button tương ứng
    }

    // Mặc định hiển thị box1 và sáng button1
    switchBox(0);

    // Lặp qua từng button và gán sự kiện click
    buttons.forEach(function(button, index) {
        button.addEventListener('click', function() {
            currentIndex = index; // Cập nhật chỉ số hiện tại khi người dùng nhấp vào button
            switchBox(currentIndex); // Chuyển đổi box và button tương ứng
        });
    });

    // Thiết lập chạy tự động sau mỗi 3 giây
    intervalId = setInterval(autoSwitch, 2500);

    // Dừng chuyển đổi tự động khi người dùng nhấp vào box hoặc button
    boxes.forEach(function(box) {
        box.addEventListener('click', stopAutoSwitch);
    });

    buttons.forEach(function(button) {
        button.addEventListener('click', stopAutoSwitch);
    });

    // Hàm để dừng chuyển đổi tự động
    function stopAutoSwitch() {
        clearInterval(intervalId);
    }
});
// Xử lý click menu
document.addEventListener('DOMContentLoaded', function () {
    var menuButton = document.querySelector('.menu');
    var main = document.querySelector('.main');

    var slideContainer = document.querySelector('.list-menu');

    menuButton.addEventListener('click', function (event) {
        event.stopPropagation(); // Ngăn chặn việc lan truyền sự kiện click đến document

        slideContainer.classList.add('open'); // Thêm lớp "open" để hiển thị slide-container
        main.style.opacity="0.5"
    });

    document.addEventListener('click', function (event) {
        var targetElement = event.target;

        if (!slideContainer.contains(targetElement) && !targetElement.classList.contains('menu')) {
            slideContainer.classList.remove('open');
            main.style.opacity = "1";
        }
    });
});
// Xử lý nút back to top:
window.addEventListener('DOMContentLoaded', function() {
    var backToTopButton = document.getElementById('back-to-top');

    // Xử lý sự kiện click trên nút "Back to Top"
    backToTopButton.addEventListener('click', function() {
        // Cuộn lên đầu trang
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
var lastScrollTop = 0;
window.addEventListener("scroll", handleScroll);

function handleScroll() {
    var backToTopButton = document.querySelector(".top");
    var scrollTop = document.documentElement.scrollTop; // lấy vtri cuộn hiện tại
    if (scrollTop > 20 && scrollTop > lastScrollTop) {
        // Kiểm tra nếu vị trí của trang lớn hơn 20 pixel và trang đang cuộn hoặc đứng im
        backToTopButton.style.display = "flex";
    } else {
        backToTopButton.style.display = "none";
    }

}
//Xử lý nút xem thêm ảnh
let anbots = document.querySelectorAll(".anbot");
let adds = document.querySelector(".add");

function add() {
    for (let i = 0; i < anbots.length; i++) {
        anbots[i].style.display = "flex";
        anbots[i].classList.add("hien");
    }
    adds.style.display = "none";
}

function anbot() {
    for (let i = 0; i < anbots.length; i++) {
        anbots[i].classList.remove("hien");

        anbots[i].style.display = "none";
    }
    adds.style.display = "flex";
}
// khi di chuyển vào từng dự án nút xem thêm sẽ xuât hiện
function showButton(container) {
    var button = container.querySelector('.show-more');
    button.style.display = 'block';
}

function hideButton(container) {
    var button = container.querySelector('.show-more');
    button.style.display = 'none';
}
// Xử lý sự kiện khi nhấp vào nút "Xem chi tiết"
const viewDetailsButtons = document.querySelectorAll(".view-details");
viewDetailsButtons.forEach(button => {
    button.addEventListener("click", () => {
        const modalId = button.getAttribute("data-modalId");
        const modal = document.getElementById(modalId);
        modal.classList.add("hien")
        modal.style.display = "flex";
    });
});

// Xử lý sự kiện khi nhấp vào nút "Đóng" trong modal
const closeModalButtons = document.querySelectorAll(".close-modal");
closeModalButtons.forEach(button => {
    button.addEventListener("click", () => {
        const modal = button.closest(".modal");
        modal.style.display = "none";
    });
});


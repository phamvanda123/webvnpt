const scrollTopBtn = document.getElementById("scrollTopBtn");
const contactItems = document.querySelectorAll(".contact-btn"); // Từng i
const lopphu = document.getElementById("lopphu")
var isvisible=false;
var temp;
const btnSupport = document.getElementById("supportIcon");
btnSupport.addEventListener("click",()=>{
  if(isvisible){
    temp = "none";
    isvisible = false;
  }else{
    temp = "block";
    isvisible = true;
  } 
  contactItems.forEach((item) => {
      item.style.display = temp; 
      lopphu.style.display= temp;
  });
})
// Khi người dùng cuộn xuống, hiển thị nút cuộn lên
window.addEventListener("scroll", function() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    scrollTopBtn.style.display = "block"; // Hiển thị nút
  } else {
    scrollTopBtn.style.display = "none"; // Ẩn nút
  }
});

// Khi người dùng nhấn nút cuộn lên, trang sẽ cuộn lên đầu
scrollTopBtn.addEventListener("click", function() {
  window.scrollTo({top: 0, behavior: 'smooth'});
});
// THANH TRƯỢT SẢN PHẨM 

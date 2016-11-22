document.querySelector(".map").addEventListener("click", function (event) {
event.preventDefault();

var mapPopup = document.querySelector(".modal-content-map");
var mapClose = mapPopup.querySelector(".modal-content-close");
mapPopup.classList.add("modal-content-show");

mapClose.addEventListener("click", function (event) {
event.preventDefault();
mapPopup.classList.remove("modal-content-show");
});

});



document.querySelector(".btn-write").addEventListener("click", function (event) {
event.preventDefault();

var writeModal = document.querySelector(".modal-content");
var writeUsClose = writeModal.querySelector(".modal-content-close");
writeModal.classList.add("modal-show");

writeUsClose.addEventListener("click", function (event) {
event.preventDefault();
writeModal.classList.remove("modal-show");
});

});

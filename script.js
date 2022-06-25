
$(".button-one ").click(function() {
    let response=$("input").val();
    console.log("Review has been posted");
    $(".reviews").text(response);   
});
$(".button-two").click(function() {
let response=$(".secondReview").val();
console.log("Review has been posted");
$(".inceptionReviews").text(response);
});


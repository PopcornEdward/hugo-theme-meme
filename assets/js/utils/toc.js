function handleScroll() {
    var tocList = document.querySelector("#toc_post_box .toc");
    var lastToc = tocList.lastElementChild;
    var lastTocOffset = lastToc.getBoundingClientRect().top + window.scrollY;
    var windowHeight = window.innerHeight;
    let postBody = document.querySelector(".post-body");
    console.log("postBody", postBody);
    let postBodyOffset = postBody.getBoundingClientRect().top + window.scrollY;
    console.log("postBodyOffset=", postBodyOffset - 66);
    console.log("lastTocOffset=", lastTocOffset);
    console.log("windowHeight=", windowHeight);
    console.log("window.scrollY=", window.scrollY + 66);
    console.log("lastToc-距离顶部的距离", lastTocOffset);
    console.log("lastToc.getBoundingClientRect().top=", lastToc.getBoundingClientRect().top);
    let contentOffset = postBodyOffset - 66;
    let scrollChangeSet = window.scrollY + 66;
    if (scrollChangeSet >= contentOffset) {
        tocList.style.display = "none";
        // $("#toc_fix_box").show();
    } else {
        tocList.style.display = "block";
        // $("#toc_fix_box").hide();
    }
    // if(window.scrollY >= lastTocOffset ){
    //     tocList.style.display = "none";
    // }else{
    //     tocList.style.display = "block";
    // }
    // if (lastTocOffset <= windowHeight) {
    //   tocList.style.display = "block";
    // } else {
    //   tocList.style.display = "none";
    // }
}

window.addEventListener("scroll", handleScroll);
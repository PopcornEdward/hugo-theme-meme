function handleScroll() {
    let tocList = document.querySelector("#toc_post_box .toc");
    
    if($(tocList).length === 0){
        return 
    }
    // let lastToc = tocList.lastElementChild;
    // let lastTocOffset = lastToc.getBoundingClientRect().top + window.scrollY;
    // let windowHeight = window.innerHeight;
    let postBody = document.querySelector(".post-body");
    // console.log("postBody", postBody);
    let postBodyOffset = postBody.getBoundingClientRect().top + window.scrollY;
    // console.log("postBodyOffset=", postBodyOffset - 66);
    // console.log("lastTocOffset=", lastTocOffset);
    // console.log("windowHeight=", windowHeight);
    // console.log("window.scrollY=", window.scrollY + 66);
    // console.log("lastToc-距离顶部的距离", lastTocOffset);
    // console.log("lastToc.getBoundingClientRect().top=", lastToc.getBoundingClientRect().top);
    let contentOffset = postBodyOffset - 66;
    let scrollChangeSet = window.scrollY + 66;
    if (scrollChangeSet >= contentOffset) {
        // $("#toc_post_box").hide();
        // tocList.style.display = "none";
        $("#toc_fix_box").show();
    } else {
        // $("#toc_post_box").show();
        // tocList.style.display = "block";
        $("#toc_fix_box").hide();
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
    $("#toc_fix_box").off('click','.ext_toc_btn')
    $("#toc_fix_box").on('click','.ext_toc_btn',function(){
        console.log("hello");
        let contentBox = $('#toc_fix_box');
        let tocBox = $("#TableOfContents");
        // contentBox.css('height','0')
            console.log("contentBox",contentBox)
            // contentBox.css({'height':'0','width':'55px'})    
            // contentBox.toggleClass("default")
            if(contentBox.height() === 0){
            
            contentBox.css({'height':`${tocBox.height()}px`,'width':'190px'})
        }else{
            contentBox.css({'height':'0','width':'7px'})
        }
    })
    
}

window.addEventListener("scroll", handleScroll);



    // $('.ext_toc_btn').click(function(){
    //     let that = this
    //     console.log($(that));
    // })
$(function(){
    $('#fullpage').fullpage({
		//options here
        anchors: ['section1', 'section2', 'section3', 'section4', 'section5'],
        navigation: true,
        navigationPosition: 'right',
        sectionsColor : ['#fff','#fff','#fff','#fff','#1F273B'],
        afterLoad : function(anchorLink, index) {
            //스크롤 할때마다 섹션 번호 보여주기
            // console.log('현재 섹션 번호는' + index);
            // if(index == 5) {
            //     //마지막 페이지일때 
            //     alert('마지막입니다.');
            // }
        },
        afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){
            console.log("현재 슬라이드 번호는" + slideIndex);
        },
        scrollOverflow: true,
	});

        

    
});



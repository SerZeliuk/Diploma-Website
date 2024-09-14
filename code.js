 
    var links = document.querySelectorAll('a');

    for (var i = 0; i < links.length; i++) {
        if(links[i].getAttribute('id')!='nav'){
            links[i].setAttribute('target', '_blank');
        }
        
    }


    document.addEventListener("DOMContentLoaded", function() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    document.querySelectorAll('.sidebar a').forEach(link => {
                        link.classList.remove('active'); // Remove the class from all links
                        if (link.dataset.link === entry.target.id) {
                            link.classList.add('active'); // Add class to the current viewed section link
                        }
                    });
                }
            });
        }, {rootMargin: "0px", threshold: 0.15});
    
        // Observe all sections
        document.querySelectorAll('section').forEach(section => {
            observer.observe(section);
        });
    });
    
    
        document.addEventListener('DOMContentLoaded', function() {
            body = document.body;
            document.querySelectorAll('.sidebar a').forEach(link => {
            
            link.addEventListener('click', function(event) {
                navPanel.style.display = 'none';
                body.style.paddingLeft = '20px';
    });
});
            })
    
    
        document.addEventListener('DOMContentLoaded', () => {
            const navToggle = document.getElementById('navToggle');
            const navPanel = document.getElementById('navPanel');
            const upp_header = document.getElementById('toggleContainer');
        
            body = document.body;
           
            //Show the navigation panel when mouse enters the button area
            navToggle.addEventListener('mouseenter', () => {
                //navToggle.style.visibility = 'hidden';
                setTimeout(()=>{
                    navPanel.style.display = 'block';
                    body.style.paddingLeft = '200px';
                    
                }, 200)
                
    
            });
        
            
            body.addEventListener('click', () => {
                navPanel.style.display = 'none';
                body.style.paddingLeft = '20px';
                //upp_header.style.visibility = 'visible';
                //upp_header.style.zIndex = '1000';
                navToggle.style.visibility = 'visible';
                // if(upp_header.style.opacity = '100%'){
                //     upp_header.style.opacity = '0%';
                // }
            });
        });

        document.addEventListener('DOMContentLoaded', () => { 
            const upp_header = document.getElementById('toggleContainer');
        
            // Log to check if element is correctly targeted
            console.log('Element found:', upp_header);
        
            upp_header.addEventListener('mouseenter', () => {
                console.log('Mouse enter event');
                upp_header.style.opacity = '100%';
                navToggle.style.opacity = '100%';
            });
            upp_header.addEventListener('click', () => {
                console.log('Mouse enter event');
                upp_header.style.opacity = '100%';
                navToggle.style.opacity = '100%';
            });
            upp_header.addEventListener('mouseleave', () => {
                console.log('Mouse leave event');
                upp_header.style.opacity = '0%';
            });
        });
        
        
        document.addEventListener('DOMContentLoaded', () => {
            const citatElements = document.querySelectorAll('.citat');
        
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(async (entry) => {
                    if (entry.isIntersecting) {
                       // entry.target.style.width = '850px';
                        setTimeout(() => {
                            entry.target.style.animation = 'slideIn 0.8s forwards';
                       
                        }, 200);
                        
                    } else {
                       // height = entry.target.style.height;
                            
                        //entry.target.style.height = height;
                        //entry.target.style.width = '100px';
                        ///entry.target.style.fontSize = 'auto';
                        setTimeout(()=> {
                            entry.target.style.animation = 'slideOut 0.8s forwards';
                        
                        }, 200)
                        
                    }
                });
            }, {
                threshold: 0.1 // Trigger when half of the element is in view
            });
        
            // Observe each citat element
            citatElements.forEach(el => observer.observe(el));
        });
        
       
        
        
        

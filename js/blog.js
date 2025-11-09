// Blog functionality
document.addEventListener('DOMContentLoaded', function() {
    // Load More Articles functionality
    const loadMoreBtn = document.getElementById('load-more-btn');
    const blogGrid = document.querySelector('.blog-grid');
    
    if (loadMoreBtn && blogGrid) {
        loadMoreBtn.addEventListener('click', function() {
            // Simulate loading more articles
            const loadingText = this.innerHTML;
            this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Loading...';
            this.disabled = true;
            
            setTimeout(() => {
                // In a real implementation, this would fetch more articles from a server
                const moreArticles = [
                    {
                        image: 'assets/images/blog/post7.jpg',
                        category: 'Student Life',
                        date: 'May 5, 2025',
                        categoryName: 'Cultural Adaptation',
                        title: 'Adapting to a New Culture: Tips for International Students',
                        excerpt: 'Learn how to overcome cultural shock and thrive in your new academic environment abroad.',
                        link: 'blog-articles/article7.html'
                    },
                    {
                        image: 'assets/images/blog/post8.jpg',
                        category: 'Career',
                        date: 'April 28, 2025',
                        categoryName: 'Job Opportunities',
                        title: 'Part-time Work Opportunities for International Students',
                        excerpt: 'Explore the various part-time job options available while studying abroad and how to balance work with studies.',
                        link: 'blog-articles/article8.html'
                    }
                ];
                
                moreArticles.forEach(article => {
                    const articleHTML = `
                        <article class="blog-post-card">
                            <div class="post-image">
                                <img src="${article.image}" alt="${article.title}">
                                <div class="post-category-badge">${article.category}</div>
                            </div>
                            <div class="post-content">
                                <div class="post-meta">
                                    <span class="post-date"><i class="far fa-calendar"></i> ${article.date}</span>
                                    <span class="post-category"><i class="far fa-folder"></i> ${article.categoryName}</span>
                                </div>
                                <h3>${article.title}</h3>
                                <p>${article.excerpt}</p>
                                <a href="${article.link}" class="read-more">Read More <i class="fas fa-arrow-right"></i></a>
                            </div>
                        </article>
                    `;
                    blogGrid.insertAdjacentHTML('beforeend', articleHTML);
                });
                
                this.innerHTML = loadingText;
                this.disabled = false;
                
                // Hide button if no more articles (in real implementation)
                // this.style.display = 'none';
                
            }, 1500);
        });
    }
    
    // Newsletter form submission
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const emailInput = this.querySelector('input[type="email"]');
            const email = emailInput.value;
            
            if (email) {
                // Simulate newsletter subscription
                const submitBtn = this.querySelector('button[type="submit"]');
                const originalText = submitBtn.innerHTML;
                submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Subscribing...';
                submitBtn.disabled = true;
                
                setTimeout(() => {
                    alert('Thank you for subscribing to our newsletter!');
                    emailInput.value = '';
                    submitBtn.innerHTML = originalText;
                    submitBtn.disabled = false;
                }, 1000);
            }
        });
    }
});
<?php get_header(); ?>

<!-- Main Content -->
      <main class="cta-content">
        <div class="cta-text">
          <p class="cta-reminder"> HOVER OVER WORDS </p>
          <h1 class="cta-headline">
            <div class="line"> 
                <span class="music">YOUR</span> 
                <span class="music">FAVOURITE </span>
                <span class="category-card card-green cta-card">
                    <img src="<?php echo esc_url(get_template_directory_uri()); ?>/assets/images/music-alt-1.svg" alt="music">
                </span>
                <span class="music">SONGS </span>
            </div>
            <div class="line">
                <span class="movies">THE</span>
                <span class="movies">MUST</span> 
                <span class="category-card card-purple cta-card">
                    <img src="<?php echo esc_url(get_template_directory_uri()); ?>/assets/images/video-cam-1.svg" alt="music">
                </span>
                <span class="movies">SEE</span>
                <span class="movies">MOVIES</span>
            </div>
            <div class="line">
                <span class="games">YOUR </span>
                <span class="games">MOST </span>
                <span class="games">PLAYED </span>
                <span class="category-card card-blue cta-card">
                    <img src="<?php echo esc_url(get_template_directory_uri()); ?>/assets/images/gamepad-1.svg" alt="music">
                </span>
                <span class="games">GAMES</span>
            </div>
            <div class="line">
                <span class="shopping">ALL </span>
                <span class="category-card card-yellow cta-card">
                    <img src="<?php echo esc_url(get_template_directory_uri()); ?>/assets/images/clothes-hanger-1.svg" alt="music">
                </span>
                <span class="shopping">SHOPPING </span>
                <span class="shopping">HABITS </span>
            </div>
          </h1>
        </div>
            
        <!-- CTA Button -->
        <button class="cta-button" id="ctaClose">
          START AGAIN
        </button>
      </main>
    </div>

    <!-- Main Home Page -->
    <div class="hero-container" id="homePage">
      <div class="bg-gradient"></div>
      
      <!-- Header -->
      <header class="header">
        <div class="logo">
            <a href="/">
              <span class="logo-text"> <img src="<?php echo esc_url(get_template_directory_uri()); ?>/assets/images/Logo.svg" alt="music"> </span>
              <span class="logo-img"> <img src="<?php echo esc_url(get_template_directory_uri()); ?>/assets/images/Logo-hover.svg" alt="music"> </span>
            </a>
        </div>
        <button class="menu-button" id="menuButton" aria-label="Menu">
          <span class="menu-static"> <img src="<?php echo esc_url(get_template_directory_uri()); ?>/assets/images/menu-static.svg" alt="music"> </span>
          <span class="menu-hover"> <img src="<?php echo esc_url(get_template_directory_uri()); ?>/assets/images/menu-hover.svg" alt="music"> </span>
        </button>
      </header>

      <!-- Main Content -->
      <main class="main-content">
        <div class="hero-text">
          <h1 class="main-headline">
            <div class="line"> <span class="your">YOUR</span> <span class="data">DATA</span> <span class="your">RUNS</span></div>
            <div class="line"> <span class="the">THE</span> <span class="world">WORLD</span></div>
          </h1>
          
          <div class="scroll-indicator">SCROLL DOWN</div>
        </div>

        <!-- Categories Section -->
         <section class="categories-section">
          <div class="category-cards">
            <div class="category-card card-green">
              <img src="<?php echo esc_url(get_template_directory_uri()); ?>/assets/images/music-alt-1.svg" alt="music">
            </div>
            
            <div class="category-card card-purple">
              <img src="<?php echo esc_url(get_template_directory_uri()); ?>/assets/images/video-cam-1.svg" alt="Logo">
            </div>
            
            <div class="category-card card-gradient">
              <img src="<?php echo esc_url(get_template_directory_uri()); ?>/assets/images/basket-shopping-simple-1.svg" alt="Logo">
            </div>
            
            <div class="category-card card-yellow">
              <img src="<?php echo esc_url(get_template_directory_uri()); ?>/assets/images/clothes-hanger-1.svg" alt="Logo">
            </div>
            
            <div class="category-card card-blue">
              <img src="<?php echo esc_url(get_template_directory_uri()); ?>/assets/images/gamepad-1.svg" alt="Logo">
            </div>
          </div>
        </section>

        <!-- CTA Button -->
        <button class="cta-button" id="ctaButton">
          <span>CLICK ME</span>
        </button>
        <!-- <lottie-player src="<?php echo esc_url(get_template_directory_uri()); ?>/assets/json/04.json" background="transparent"  speed="1"  style="width: 300px; height: 300px;" loop controls autoplay></lottie-player> -->
      </main>
    </div>

<!-- <section class="hero">
    <h1><?php bloginfo('name'); ?></h1>
    <p><?php bloginfo('description'); ?></p>
    <button onclick="document.querySelector('.posts').scrollIntoView({behavior: 'smooth'})">
        See Latest Posts
    </button>
</section>

<section class="posts">
    <h2>Latest Posts</h2>
    <div class="post-list">
        <?php if (have_posts()) : while (have_posts()) : the_post(); ?>
            <article>
                <h3><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h3>
                <p><?php echo wp_trim_words(get_the_excerpt(), 20); ?></p>
            </article>
        <?php endwhile; else: ?>
            <p>No posts found.</p>
        <?php endif; ?>
    </div>
</section> -->

<?php get_footer(); ?>

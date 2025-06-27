<?php
/**
 * Template Name: About Page
 */
get_header(); ?>

<!-- About Page -->
 
    <div class="page-container active">

      <main class="page-content">
        <div class="page-hero">
          <h1 class="page-headline">
            <div class="line"><?php the_field('about_headline_line_1'); ?></div>
            <div class="line"><?php the_field('about_headline_line_2'); ?></div>
          </h1>
          
          <div class="page-description">
            <p><?php the_field('about_description'); ?></p>
            
            <div class="feature-grid">
              <div class="feature-item">
                <div class="feature-icon card-green">
                  <img src="<?php echo esc_url(get_template_directory_uri()); ?>/assets/images/music-alt-1.svg" alt="music">
                </div>
                <h3>Data Intelligence</h3>
                <p>Transform raw data into actionable insights that drive meaningful decisions.</p>
              </div>
              
              <div class="feature-item">
                <div class="feature-icon card-purple">
                  <img src="<?php echo esc_url(get_template_directory_uri()); ?>/assets/images/video-cam-1.svg" alt="music">
                </div>
                <h3>Digital Innovation</h3>
                <p>Leading the charge in digital transformation and technological advancement.</p>
              </div>
              
              <div class="feature-item">
                <div class="feature-icon card-blue">
                  <img src="<?php echo esc_url(get_template_directory_uri()); ?>/assets/images/gamepad-1.svg" alt="music">
                </div>
                <h3>Future Ready</h3>
                <p>Building tomorrow's solutions with today's cutting-edge technology.</p>
              </div>
            </div>
          </div>
        </div>
        
      </main>
    </div>

<?php get_footer(); ?>
<?php
/**
 * Template Name: Contact Page
 */

get_header(); ?>

<!-- Contact Page -->
    <div class="page-container active">

      <main class="page-content">
        <div class="page-hero">
          <h1 class="page-headline">
             <div class="line"><?php the_field('contact_headline_line_1'); ?></div>
             <div class="line"><?php the_field('contact_headline_line_2'); ?></div>
          </h1>
          
          <div class="contact-content">
            <div class="contact-info">
              <div class="contact-item">
                <div class="contact-icon card-green">
                  <span>📧</span>
                </div>
                <div class="contact-details">
                  <h3>Email Us</h3>
                  <p>hello@ydrtw.com</p>
                  <p>support@ydrtw.com</p>
                </div>
              </div>
              
              <div class="contact-item">
                <div class="contact-icon card-purple">
                  <span>📱</span>
                </div>
                <div class="contact-details">
                  <h3>Call Us</h3>
                  <p>+1 (555) 123-4567</p>
                  <p>Mon-Fri 9AM-6PM EST</p>
                </div>
              </div>
              
              <div class="contact-item">
                <div class="contact-icon card-yellow">
                  <span>📍</span>
                </div>
                <div class="contact-details">
                  <h3>Visit Us</h3>
                  <p>123 Data Street</p>
                  <p>Tech City, TC 12345</p>
                </div>
              </div>
            </div>
            
            <form class="contact-form">
              <div class="form-group">
                <input type="text" placeholder="Your Name" required>
              </div>
              <div class="form-group">
                <input type="email" placeholder="Your Email" required>
              </div>
              <div class="form-group">
                <input type="text" placeholder="Subject" required>
              </div>
              <div class="form-group">
                <textarea placeholder="Your Message" rows="5" required></textarea>
              </div>
              <button type="submit" class="contact-submit">Send Message</button>
            </form>
          </div>
        </div>
      </main>
    </div>

<?php get_footer(); ?>
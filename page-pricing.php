<?php
/**
 * Template Name: About Page
 */

get_header(); ?>

<!-- Pricing Page -->
    <div class="page-container active">

      <main class="page-content">
        <div class="page-hero">
          <h1 class="page-headline">
            <div class="line"><?php the_field('pricing_headline_line_1'); ?></div>
            <div class="line"><?php the_field('pricing_headline_line_2'); ?></div>
          </h1>
          
          <div class="pricing-grid">
            <div class="pricing-card card-starter">
              <div class="pricing-header">
                <h3>Starter</h3>
                <div class="price">
                  <span class="currency">$</span>
                  <span class="amount">29</span>
                  <span class="period">/month</span>
                </div>
              </div>
              <ul class="pricing-features">
                <li>Basic Data Analytics</li>
                <li>5GB Storage</li>
                <li>Email Support</li>
                <li>Monthly Reports</li>
              </ul>
              <button class="pricing-button">Get Started</button>
            </div>
            
            <div class="pricing-card card-pro featured">
              <div class="featured-badge">Most Popular</div>
              <div class="pricing-header">
                <h3>Professional</h3>
                <div class="price">
                  <span class="currency">$</span>
                  <span class="amount">99</span>
                  <span class="period">/month</span>
                </div>
              </div>
              <ul class="pricing-features">
                <li>Advanced Analytics</li>
                <li>50GB Storage</li>
                <li>Priority Support</li>
                <li>Real-time Insights</li>
                <li>Custom Dashboards</li>
              </ul>
              <button class="pricing-button">Choose Pro</button>
            </div>
            
            <div class="pricing-card card-enterprise">
              <div class="pricing-header">
                <h3>Enterprise</h3>
                <div class="price">
                  <span class="currency">$</span>
                  <span class="amount">299</span>
                  <span class="period">/month</span>
                </div>
              </div>
              <ul class="pricing-features">
                <li>Enterprise Analytics</li>
                <li>Unlimited Storage</li>
                <li>24/7 Dedicated Support</li>
                <li>AI-Powered Insights</li>
                <li>White-label Solutions</li>
                <li>API Access</li>
              </ul>
              <button class="pricing-button">Contact Sales</button>
            </div>
          </div>
        </div>
      </main>
    </div>

<?php get_footer(); ?>
<?php get_header(); ?>

<section class="hero">
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
</section>

<?php get_footer(); ?>

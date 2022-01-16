export const WordPressAbout =
    '<?php\n' +
    '/**\n' +
    ' * About This Version administration panel.\n' +
    ' *\n' +
    ' * @package WordPress\n' +
    ' * @subpackage Administration\n' +
    ' */\n' +
    '\n' +
    '/** WordPress Administration Bootstrap */\n' +
    'require_once __DIR__ . \'/admin.php\';\n' +
    '\n' +
    '// Used in the HTML title tag.\n' +
    '/* translators: Page title of the About WordPress page in the admin. */\n' +
    '$title = _x( \'About\', \'page title\' );\n' +
    '\n' +
    'list( $display_version ) = explode( \'-\', get_bloginfo( \'version\' ) );\n' +
    '\n' +
    'require_once ABSPATH . \'wp-admin/admin-header.php\';\n' +
    '?>\n' +
    '\t<div class="wrap about__container">\n' +
    '\n' +
    '\t\t<div class="about__header">\n' +
    '\t\t\t<div class="about__header-title">\n' +
    '\t\t\t\t<h1>\n' +
    '\t\t\t\t\t<?php _e( \'WordPress\' ); ?>\n' +
    '\t\t\t\t\t<span class="screen-reader-text"><?php echo $display_version; ?></span>\n' +
    '\t\t\t\t</h1>\n' +
    '\t\t\t</div>\n' +
    '\n' +
    '\t\t\t<div class="about__header-text">\n' +
    '\t\t\t\t<?php _e( \'Build the site you&#8217;ve always wanted &#8212; with blocks\' ); ?>\n' +
    '\t\t\t</div>\n' +
    '\n' +
    '\t\t\t<nav class="about__header-navigation nav-tab-wrapper wp-clearfix" aria-label="<?php esc_attr_e( \'Secondary menu\' ); ?>">\n' +
    '\t\t\t\t<a href="about.php" class="nav-tab nav-tab-active" aria-current="page"><?php _e( \'What&#8217;s New\' ); ?></a>\n' +
    '\t\t\t\t<a href="credits.php" class="nav-tab"><?php _e( \'Credits\' ); ?></a>\n' +
    '\t\t\t\t<a href="freedoms.php" class="nav-tab"><?php _e( \'Freedoms\' ); ?></a>\n' +
    '\t\t\t\t<a href="privacy.php" class="nav-tab"><?php _e( \'Privacy\' ); ?></a>\n' +
    '\t\t\t</nav>\n' +
    '\t\t</div>\n' +
    '\n' +
    '\t\t<hr class="is-large" />\n' +
    '\n' +
    '\t\t<div class="about__section">\n' +
    '\t\t\t<h2 class="aligncenter">\n' +
    '\t\t\t\t<?php _e( \'Full Site Editing is here\' ); ?>\n' +
    '\t\t\t</h2>\n' +
    '\t\t\t<p class="aligncenter is-subheading">\n' +
    '\t\t\t\t<?php _e( \'It puts you in control of your whole site, right in the WordPress Admin.\' ); ?>\n' +
    '\t\t\t</p>\n' +
    '\t\t</div>\n' +
    '\n' +
    '\t\t<hr />\n' +
    '\n' +
    '\t\t<div class="about__section has-2-columns has-gutters is-wider-left">\n' +
    '\t\t\t<div class="column about__image is-vertically-aligned-center is-edge-to-edge">\n' +
    '\t\t\t\t<img src="https://s.w.org/images/core/5.9/twenty-twenty-two.png" alt="" />\n' +
    '\t\t\t</div>\n' +
    '\t\t\t<div class="column is-edge-to-edge">\n' +
    '\t\t\t\t<h3>\n' +
    '\t\t\t\t\t<?php _e( \'Say hello to Twenty Twenty&#8209;Two\' ); ?>\n' +
    '\t\t\t\t</h3>\n' +
    '\t\t\t\t<p>\n' +
    '\t\t\t\t\t<?php _e( \'And say hello to the first default block theme in the history of WordPress. This is more than just a new default theme. It&#8217;s a brand-new way to work with WordPress themes.\' ); ?>\n' +
    '\t\t\t\t</p>\n' +
    '\t\t\t\t<p>\n' +
    '\t\t\t\t\t<?php _e( \'Block themes put a wide array of visual choices in your hands, from color schemes and typeface combinations to page templates and image filters &#8212; all together, in the site editing interface. By making changes in one place, you can give Twenty Twenty&#8209;Two the same look and feel as your brand or other websites &#8212; or take your site&#8217;s look in another direction.\' ); ?>\n' +
    '\t\t\t\t</p>\n' +
    '\t\t\t\t<?php if ( current_user_can( \'switch_themes\' ) ) : ?>\n' +
    '\t\t\t\t<p>\n' +
    '\t\t\t\t\t<?php\n' +
    '\t\t\t\t\tprintf(\n' +
    '\t\t\t\t\t\t/* translators: %s: Link to Themes screen. */\n' +
    '\t\t\t\t\t\t__( \'The Twenty Twenty&#8209;Two theme is already available to you. It came installed with WordPress 5.9, and you will find it with <a href="%s">your other installed themes</a>.\' ),\n' +
    '\t\t\t\t\t\tadmin_url( \'themes.php\' )\n' +
    '\t\t\t\t\t);\n' +
    '\t\t\t\t\t?>\n' +
    '\t\t\t\t</p>\n' +
    '\t\t\t\t<?php endif; ?>\n' +
    '\t\t\t</div>\n' +
    '\t\t</div>\n' +
    '\n' +
    '\t\t<div class="about__section has-2-columns has-gutters is-wider-right">\n' +
    '\t\t\t<div class="column is-edge-to-edge">\n' +
    '\t\t\t\t<h3>\n' +
    '\t\t\t\t\t<?php _e( \'Your personal paintbox awaits\' ); ?>\n' +
    '\t\t\t\t</h3>\n' +
    '\t\t\t\t<p>\n' +
    '\t\t\t\t\t<?php _e( \'More block themes built for full site editing features are in the Theme Directory alongside the Twenty Twenty&#8209;Two theme, just waiting to be explored. Expect more to come!\' ); ?>\n' +
    '\t\t\t\t</p>\n' +
    '\t\t\t\t<p>\n' +
    '\t\t\t\t\t<?php _e( \'When you use any of those new themes, you no longer need the Customizer. Instead, you have all the power of the Styles interface inside the Site Editor. Just as in Twenty Twenty&#8209;Two, you build your site&#8217;s look and feel there, with the tools you need for the job in a fluid interface that practically comes alive in your hands.\' ); ?>\n' +
    '\t\t\t\t</p>\n' +
    '\t\t\t</div>\n' +
    '\t\t\t<div class="column about__image is-vertically-aligned-center is-edge-to-edge">\n' +
    '\t\t\t\t<img src="https://s.w.org/images/core/5.9/global-styles.png" alt="" />\n' +
    '\t\t\t</div>\n' +
    '\t\t</div>\n' +
    '\n' +
    '\t\t<div class="about__section has-2-columns has-gutters is-wider-left">\n' +
    '\t\t\t<div class="column about__image is-vertically-aligned-center is-edge-to-edge">\n' +
    '\t\t\t\t<img src="https://s.w.org/images/core/5.9/navigation-block.png" alt="" />\n' +
    '\t\t\t</div>\n' +
    '\t\t\t<div class="column is-edge-to-edge">\n' +
    '\t\t\t\t<h3>\n' +
    '\t\t\t\t\t<?php _e( \'The Navigation block\' ); ?>\n' +
    '\t\t\t\t</h3>\n' +
    '\t\t\t\t<p>\n' +
    '\t\t\t\t\t<?php _e( \'Blocks come to site navigation, the heart of user experience.\' ); ?>\n' +
    '\t\t\t\t</p>\n' +
    '\t\t\t\t<p>\n' +
    '\t\t\t\t\t<?php _e( \'The new Navigation block gives you the power to choose: an always-on responsive menu or one that adapts to your user&#8217;s screen size. Whatever you create, know it&#8217;s there to reuse wherever you like, whether in a brand new template or after switching themes.\' ); ?>\n' +
    '\t\t\t\t</p>\n' +
    '\t\t\t</div>\n' +
    '\t\t</div>\n' +
    '\n' +
    '\t\t<hr class="is-large" />\n' +
    '\n' +
    '\t\t<div class="about__section">\n' +
    '\t\t\t<h2 class="aligncenter">\n' +
    '\t\t\t\t<?php _e( \'More improvements and updates\' ); ?>\n' +
    '\t\t\t</h2>\n' +
    '\t\t\t<p class="aligncenter is-subheading">\n' +
    '\t\t\t\t<?php _e( \'Do you love to blog or produce content? New tweaks to the publishing flow help you say more, faster.\' ); ?>\n' +
    '\t\t\t</p>\n' +
    '\t\t</div>\n' +
    '\n' +
    '\t\t<hr />\n' +
    '\n' +
    '\t\t<div class="about__section has-2-columns has-gutters is-wider-left">\n' +
    '\t\t\t<div class="column about__image is-vertically-aligned-center is-edge-to-edge">\n' +
    '\t\t\t\t<img src="https://s.w.org/images/core/5.9/block-controls.png" alt="" />\n' +
    '\t\t\t</div>\n' +
    '\t\t\t<div class="column is-edge-to-edge">\n' +
    '\t\t\t\t<h3>\n' +
    '\t\t\t\t\t<?php _e( \'Better block controls\' ); ?>\n' +
    '\t\t\t\t</h3>\n' +
    '\t\t\t\t<p>\n' +
    '\t\t\t\t\t<?php _e( \'WordPress 5.9 features new typography tools, flexible layout controls, and finer control over details like spacing, borders, and more &#8212; to help you get not just the look, but the polish that says you care about details.\' ); ?>\n' +
    '\t\t\t\t</p>\n' +
    '\t\t\t</div>\n' +
    '\t\t</div>\n' +
    '\n' +
    '\t\t<div class="about__section has-2-columns has-gutters is-wider-right">\n' +
    '\t\t\t<div class="column is-edge-to-edge">\n' +
    '\t\t\t\t<h3>\n' +
    '\t\t\t\t\t<?php _e( \'The power of patterns\' ); ?>\n' +
    '\t\t\t\t</h3>\n' +
    '\t\t\t\t<p>\n' +
    '\t\t\t\t\t<?php _e( \'The WordPress Pattern Directory is the home of a wide range of block patterns built to save you time and add core site functionality. And you can edit them as you see fit. Need something different in the header or footer for your theme? Swap it out with a new one in a few clicks.\' ); ?>\n' +
    '\t\t\t\t</p>\n' +
    '\t\t\t\t<p>\n' +
    '\t\t\t\t\t<?php _e( \'With a near full-screen view that draws you in to see fine details, the Pattern Explorer makes it easy to compare patterns and choose the one your users will expect.\' ); ?>\n' +
    '\t\t\t\t</p>\n' +
    '\t\t\t</div>\n' +
    '\t\t\t<div class="column about__image is-vertically-aligned-center is-edge-to-edge">\n' +
    '\t\t\t\t<img src="https://s.w.org/images/core/5.9/pattern-explorer.png" alt="" />\n' +
    '\t\t\t</div>\n' +
    '\t\t</div>\n' +
    '\n' +
    '\t\t<div class="about__section has-2-columns has-gutters is-wider-left">\n' +
    '\t\t\t<div class="column about__image is-vertically-aligned-center is-edge-to-edge">\n' +
    '\t\t\t\t<img src="https://s.w.org/images/core/5.9/list-view.png" alt="" />\n' +
    '\t\t\t</div>\n' +
    '\t\t\t<div class="column is-edge-to-edge">\n' +
    '\t\t\t\t<h3>\n' +
    '\t\t\t\t\t<?php _e( \'A revamped List View\' ); ?>\n' +
    '\t\t\t\t</h3>\n' +
    '\t\t\t\t<p>\n' +
    '\t\t\t\t\t<?php _e( \'In 5.9, the List View lets you drag and drop your content exactly where you want it. Managing complex documents is easier, too: simple controls let you expand and collapse sections as you build your site &#8212; and add HTML anchors to your blocks to help users get around the page.\' ); ?>\n' +
    '\t\t\t\t</p>\n' +
    '\t\t\t</div>\n' +
    '\t\t</div>\n' +
    '\n' +
    '\t\t<div class="about__section has-2-columns has-gutters is-wider-right">\n' +
    '\t\t\t<div class="column is-edge-to-edge">\n' +
    '\t\t\t\t<h3>\n' +
    '\t\t\t\t\t<?php _e( \'A better Gallery block\' ); ?>\n' +
    '\t\t\t\t</h3>\n' +
    '\t\t\t\t<p>\n' +
    '\t\t\t\t\t<?php _e( \'Treat every image in a Gallery block the same way you would treat it in the Image block.\' ); ?>\n' +
    '\t\t\t\t</p>\n' +
    '\t\t\t\t<p>\n' +
    '\t\t\t\t\t<?php _e( \'Style every image in your gallery differently from the next (with different crops, or duotones, for instance) or make them all the same. And change the layout with drag-and-drop.\' ); ?>\n' +
    '\t\t\t\t</p>\n' +
    '\t\t\t</div>\n' +
    '\t\t\t<div class="column about__image is-vertically-aligned-center is-edge-to-edge">\n' +
    '\t\t\t\t<img src="https://s.w.org/images/core/5.9/gallery-block.png" alt="" />\n' +
    '\t\t\t</div>\n' +
    '\t\t</div>\n' +
    '\n' +
    '\t\t<hr class="is-large" />\n' +
    '\n' +
    '\t\t<div class="about__section">\n' +
    '\t\t\t<h2 class="aligncenter" style="margin-bottom:0;">\n' +
    '\t\t\t\t<?php\n' +
    '\t\t\t\tprintf(\n' +
    '\t\t\t\t\t/* translators: %s: Version number. */\n' +
    '\t\t\t\t\t__( \'WordPress %s for developers\' ),\n' +
    '\t\t\t\t\t$display_version\n' +
    '\t\t\t\t);\n' +
    '\t\t\t\t?>\n' +
    '\t\t\t</h2>\n' +
    '\t\t</div>\n' +
    '\n' +
    '\t\t<div class="about__section has-gutters has-2-columns">\n' +
    '\t\t\t<div class="column is-edge-to-edge">\n' +
    '\t\t\t\t<h3>\n' +
    '\t\t\t\t\t<?php _e( \'Introducing block themes\' ); ?>\n' +
    '\t\t\t\t</h3>\n' +
    '\t\t\t\t<p>\n' +
    '\t\t\t\t\t<?php\n' +
    '\t\t\t\t\tprintf(\n' +
    '\t\t\t\t\t\t/* translators: %s: Block-based themes dev note link. */\n' +
    '\t\t\t\t\t\t__( \'A new way to build themes: Block themes use blocks to define the templates that structure your entire site. The new templates and template parts are defined in HTML and use the custom styling offered in theme.json. More information is available in the <a href="%s">block themes dev note</a>.\' ),\n' +
    '\t\t\t\t\t\t\'https://make.wordpress.org/core/2022/01/04/block-themes-a-new-way-to-build-themes-in-wordpress-5-9/\'\n' +
    '\t\t\t\t\t);\n' +
    '\t\t\t\t\t?>\n' +
    '\t\t\t\t</p>\n' +
    '\t\t\t</div>\n' +
    '\t\t\t<div class="column is-edge-to-edge">\n' +
    '\t\t\t\t<h3>\n' +
    '\t\t\t\t\t<?php _e( \'Multiple stylesheets for a block\' ); ?>\n' +
    '\t\t\t\t</h3>\n' +
    '\t\t\t\t<p>\n' +
    '\t\t\t\t\t<?php\n' +
    '\t\t\t\t\tprintf(\n' +
    '\t\t\t\t\t\t/* translators: %s: Multiple stylesheets dev note link. */\n' +
    '\t\t\t\t\t\t__( \'Now you can register more than one stylesheet per block. You can use this to share styles across blocks you write, or to load styles for individual blocks, so your styles are only loaded when the block is used. Find out more about <a href="%s">using multiple stylesheets in a block</a>.\' ),\n' +
    '\t\t\t\t\t\t\'https://make.wordpress.org/core/2021/12/15/using-multiple-stylesheets-per-block/\'\n' +
    '\t\t\t\t\t);\n' +
    '\t\t\t\t\t?>\n' +
    '\t\t\t\t</p>\n' +
    '\t\t\t</div>\n' +
    '\t\t</div>\n' +
    '\t\t<div class="about__section has-gutters has-2-columns">\n' +
    '\t\t\t<div class="column is-edge-to-edge">\n' +
    '\t\t\t\t<h3>\n' +
    '\t\t\t\t\t<?php _e( \'Block&#8209;level locking\' ); ?>\n' +
    '\t\t\t\t</h3>\n' +
    '\t\t\t\t<p>\n' +
    '\t\t\t\t\t<?php _e( \'Now you can lock any block (or a few of them) in a pattern, just by adding a lock attribute to its settings in block.json &#8212; leaving the rest of the pattern free for site editors to adapt to their content.\' ); ?>\n' +
    '\t\t\t\t</p>\n' +
    '\t\t\t</div>\n' +
    '\t\t\t<div class="column is-edge-to-edge">\n' +
    '\t\t\t\t<h3>\n' +
    '\t\t\t\t\t<?php _e( \'A refactored Gallery block\' ); ?>\n' +
    '\t\t\t\t</h3>\n' +
    '\t\t\t\t<p>\n' +
    '\t\t\t\t\t<?php\n' +
    '\t\t\t\t\tprintf(\n' +
    '\t\t\t\t\t\t/* translators: %s: Gallery Refactor dev note link. */\n' +
    '\t\t\t\t\t\t__( \'The changes to the Gallery block listed above are the result of a near-complete refactoring. Have you built a plugin or theme on the Gallery block functionality? Be sure to read the <a href="%s">Gallery block compatibility dev note</a>.\' ),\n' +
    '\t\t\t\t\t\t\'https://make.wordpress.org/core/2021/08/20/gallery-block-refactor-dev-note/\'\n' +
    '\t\t\t\t\t);\n' +
    '\t\t\t\t\t?>\n' +
    '\t\t\t\t</p>\n' +
    '\t\t\t</div>\n' +
    '\t\t</div>\n' +
    '\n' +
    '\t\t<hr class="is-large" />\n' +
    '\n' +
    '\t\t<div class="about__section has-subtle-background-color has-2-columns is-wider-right">\n' +
    '\t\t\t<div class="column about__image is-vertically-aligned-center">\n' +
    '\t\t\t\t<img src="https://s.w.org/images/core/5.9/learn-video.png" alt="" />\n' +
    '\t\t\t</div>\n' +
    '\t\t\t<div class="column">\n' +
    '\t\t\t\t<h3><?php _e( \'Learn more about the new features in 5.9\' ); ?></h3>\n' +
    '\t\t\t\t<p>\n' +
    '\t\t\t\t\t<?php\n' +
    '\t\t\t\t\tprintf(\n' +
    '\t\t\t\t\t\t/* translators: %s: Learn WordPress link. */\n' +
    '\t\t\t\t\t\t__( \'Want to dive into 5.9 but don&#8217;t know where to start? Visit <a href="%s">learn.wordpress.org</a> for expanding resources on new features in WordPress 5.9.\' ),\n' +
    '\t\t\t\t\t\t\'https://learn.wordpress.org\'\n' +
    '\t\t\t\t\t);\n' +
    '\t\t\t\t\t?>\n' +
    '\t\t\t\t</p>\n' +
    '\t\t\t</div>\n' +
    '\t\t</div>\n' +
    '\n' +
    '\t\t<hr class="is-large" />\n' +
    '\n' +
    '\t\t<div class="about__section">\n' +
    '\t\t\t<div class="column">\n' +
    '\t\t\t\t<h3><?php _e( \'Check the Field Guide for more!\' ); ?></h3>\n' +
    '\t\t\t\t<p>\n' +
    '\t\t\t\t\t<?php\n' +
    '\t\t\t\t\tprintf(\n' +
    '\t\t\t\t\t\t/* translators: %s: WordPress 5.9 Field Guide link. */\n' +
    '\t\t\t\t\t\t__( \'Check out the latest version of the WordPress Field Guide. It highlights developer notes for each change you may want to be aware of. <a href="%s">WordPress 5.9 Field Guide.</a>\' ),\n' +
    '\t\t\t\t\t\t\'https://make.wordpress.org/core/2022/01/10/wordpress-5-9-field-guide/\'\n' +
    '\t\t\t\t\t);\n' +
    '\t\t\t\t\t?>\n' +
    '\t\t\t\t</p>\n' +
    '\t\t\t</div>\n' +
    '\t\t</div>\n' +
    '\n' +
    '\t\t<hr />\n' +
    '\n' +
    '\t\t<div class="return-to-dashboard">\n' +
    '\t\t\t<?php if ( current_user_can( \'update_core\' ) && isset( $_GET[\'updated\'] ) ) : ?>\n' +
    '\t\t\t\t<a href="<?php echo esc_url( self_admin_url( \'update-core.php\' ) ); ?>">\n' +
    '\t\t\t\t\t<?php is_multisite() ? _e( \'Go to Updates\' ) : _e( \'Go to Dashboard &rarr; Updates\' ); ?>\n' +
    '\t\t\t\t</a> |\n' +
    '\t\t\t<?php endif; ?>\n' +
    '\t\t\t<a href="<?php echo esc_url( self_admin_url() ); ?>"><?php is_blog_admin() ? _e( \'Go to Dashboard &rarr; Home\' ) : _e( \'Go to Dashboard\' ); ?></a>\n' +
    '\t\t</div>\n' +
    '\t</div>\n' +
    '\n' +
    '<?php require_once ABSPATH . \'wp-admin/admin-footer.php\'; ?>\n' +
    '\n' +
    '<?php\n' +
    '\n' +
    '// These are strings we may use to describe maintenance/security releases, where we aim for no new strings.\n' +
    'return;\n' +
    '\n' +
    '__( \'Maintenance Release\' );\n' +
    '__( \'Maintenance Releases\' );\n' +
    '\n' +
    '__( \'Security Release\' );\n' +
    '__( \'Security Releases\' );\n' +
    '\n' +
    '__( \'Maintenance and Security Release\' );\n' +
    '__( \'Maintenance and Security Releases\' );\n' +
    '\n' +
    '/* translators: %s: WordPress version number. */\n' +
    '__( \'<strong>Version %s</strong> addressed one security issue.\' );\n' +
    '/* translators: %s: WordPress version number. */\n' +
    '__( \'<strong>Version %s</strong> addressed some security issues.\' );\n' +
    '\n' +
    '/* translators: 1: WordPress version number, 2: Plural number of bugs. */\n' +
    '_n_noop(\n' +
    '\t\'<strong>Version %1$s</strong> addressed %2$s bug.\',\n' +
    '\t\'<strong>Version %1$s</strong> addressed %2$s bugs.\'\n' +
    ');\n' +
    '\n' +
    '/* translators: 1: WordPress version number, 2: Plural number of bugs. Singular security issue. */\n' +
    '_n_noop(\n' +
    '\t\'<strong>Version %1$s</strong> addressed a security issue and fixed %2$s bug.\',\n' +
    '\t\'<strong>Version %1$s</strong> addressed a security issue and fixed %2$s bugs.\'\n' +
    ');\n' +
    '\n' +
    '/* translators: 1: WordPress version number, 2: Plural number of bugs. More than one security issue. */\n' +
    '_n_noop(\n' +
    '\t\'<strong>Version %1$s</strong> addressed some security issues and fixed %2$s bug.\',\n' +
    '\t\'<strong>Version %1$s</strong> addressed some security issues and fixed %2$s bugs.\'\n' +
    ');\n' +
    '\n' +
    '/* translators: %s: Documentation URL. */\n' +
    '__( \'For more information, see <a href="%s">the release notes</a>.\' );\n'
;

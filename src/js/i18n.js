// VibeShip i18n - Simple language switcher

const translations = {
  en: {
    // Navigation
    nav_browse: 'Browse',
    nav_submit: 'Submit',
    nav_lang_toggle: 'EN',
    nav_logo: 'VibeShip',

    // Hero
    hero_title: 'Launch Your Creations',
    hero_tagline: 'Discover and share amazing products built with Vibe Coding',
    search_placeholder: 'Search products...',

    // Categories
    cat_all: 'All',
    cat_ai: 'AI Tools',
    cat_efficiency: 'Productivity',
    cat_framework: 'Frameworks',
    cat_chrome: 'Chrome Extensions',
    cat_mobile: 'Mobile Apps',
    cat_saas: 'SaaS',
    cat_content: 'Content Creation',
    cat_education: 'Education',
    cat_design: 'Design Tools',
    cat_data: 'Data Analytics',
    cat_opensource: 'Open Source',
    cat_other: 'Other',

    // Product card
    by_author: 'by',

    // Empty state
    empty_title: 'No products yet',
    empty_subtitle: 'Be the first to launch here!',

    // CTA
    cta_title: 'Ready to Launch?',
    cta_subtitle: 'Submit your product via GitHub PR and let the world discover your creation',
    cta_button: 'Launch Your Product',

    // Submit prompt
    submit_prompt_title: 'Share Your Creation',
    submit_prompt_desc: 'Built with Vibe Coding? Submit your product in minutes.',
    submit_prompt_btn: 'Launch Now',

    // Footer
    footer_copyright: 'Powered by Vibe Coding.',
    footer_github: 'GitHub',

    // Product detail
    back_to_products: 'Back to products',
    about: 'About',
    benefits: 'Benefits',
    benefits_hint: 'Each benefit item is stored as code + description.',
    contact: 'Contact',
    author: 'Author',
    visit: 'Visit',
    github: 'GitHub',
    view_on_github: 'View on GitHub',
    github_not_provided: 'GitHub not provided',
    loading_product: 'Loading...',

    // Submit page
    submit_title: 'Launch Your Product',
    submit_subtitle: 'Share your Vibe Coding creation with the world via GitHub Pull Request',
    how_to_submit: 'How to Launch',
    product_format: 'Product Format',
    field_reference: 'Field Reference',
    required_fields: 'Required Fields',
    categories: 'Categories',
    optional_fields: 'Optional Fields',
    fork_submit: 'Fork & Launch',
    step1_title: 'Fork the Repository',
    step1_desc: 'Fork VibeShip to your GitHub account',
    step2_title: 'Create Product Directory',
    step2_desc: 'Create a new directory under products/ with your product ID',
    step3_title: 'Add product.json',
    step3_desc: 'Create a product.json file with your product information',
    step4_title: 'Add Screenshots',
    step4_desc: 'Place your product screenshots in the directory',
    step5_title: 'Submit Pull Request',
    step5_desc: 'Push your changes and create a PR to the main repository',

    // Submit page (new form)
    submit_hero_title: 'Launch Your Product',
    submit_hero_subtitle: 'Fill in the details and copy the prompt to your AI agent',
    copy_for_ai: 'Copy for AI',
    draft_saved: 'Draft saved',
    basic_info: 'Basic Information',
    contact_info: 'Contact Information',
    author_info: 'Author Information',
    benefits_info: 'Benefits',
    screenshots_info: 'Product Screenshots',
    field_name: 'Product Name',
    field_tagline: 'Tagline',
    field_description: 'Description',
    field_category: 'Category',
    field_tags: 'Tags',
    field_author_name: 'Author Name',
    field_benefit_code: 'Benefit Code',
    field_benefit_description: 'Benefit Description',
    select_category: 'Select category',
    hint_tagline: 'A concise one-liner (max 50 chars), e.g. AI note-taking assistant.',
    hint_tags: 'Press Enter / comma / newline to add tags, up to 5',
    hint_contact: 'At least one contact method required',
    hint_links: 'Add links one by one and choose platform first',
    hint_benefits: 'Optional. Add promo codes, launch discounts, or other perks.',
    hint_screenshots: 'Screenshots will be guided after you submit to AI. Recommended 16:9 ratio.',
    placeholder_name: 'e.g. VibeShip Copilot',
    placeholder_tagline: 'e.g. Turn product docs into launch-ready PRs',
    placeholder_description: 'e.g. ## What it does\\nGenerate PR-ready product pages with screenshots and metadata',
    placeholder_tags: 'e.g. AI, Automation, Launch',
    placeholder_github: 'https://github.com/username',
    placeholder_twitter: 'https://twitter.com/username',
    placeholder_email: 'hello@example.com',
    placeholder_wechat: 'WeChat ID or public account',
    placeholder_xiaohongshu: '小红书 profile URL',
    placeholder_zhihu: '知乎 profile URL',
    placeholder_author_name: 'Your name or team name',
    placeholder_author_github: 'https://github.com/username',
    placeholder_benefit_code: 'e.g. LAUNCH20',
    placeholder_benefit_description: 'e.g. 20% off for launch users',
    need_help: 'Need help? Check the',
    skill_doc: 'Skill Docs',

    // New form fields
    product_links: 'Product Links',
    add_product_link: 'Add Product Link',
    add_contact: 'Add Contact',
    add_author_contact: 'Add Author Contact',
    add_benefit: 'Add Benefit',
    placeholder_appstore: 'https://apps.apple.com/...',
    placeholder_googleplay: 'https://play.google.com/...',
    placeholder_website: 'https://your-product.com',
    placeholder_windows: 'https://...',
    placeholder_mac: 'https://...',
    placeholder_linux: 'https://...',
    placeholder_chrome: 'https://chrome.google.com/...',
    author_contacts: 'Author Contacts',
  },
  zh: {
    // Navigation
    nav_browse: '发现',
    nav_submit: '发布',
    nav_lang_toggle: '中文',
    nav_logo: '起航号',

    // Hero
    hero_title: '在这里，起航你的作品',
    hero_tagline: '发现并分享 Vibe Coding 开发的酷炫产品',
    search_placeholder: '搜索产品...',

    // Categories
    cat_all: '全部',
    cat_ai: 'AI工具',
    cat_efficiency: '效率工具',
    cat_framework: '开发框架',
    cat_chrome: 'Chrome扩展',
    cat_mobile: '移动应用',
    cat_saas: 'SaaS',
    cat_content: '内容创作',
    cat_education: '教育学习',
    cat_design: '设计工具',
    cat_data: '数据分析',
    cat_opensource: '开源项目',
    cat_other: '其他',

    // Product card
    by_author: '作者',

    // Empty state
    empty_title: '暂无产品',
    empty_subtitle: '成为第一个在此起航的人！',

    // CTA
    cta_title: '准备好起航了吗？',
    cta_subtitle: '通过 GitHub PR 提交产品，让世界发现你的创作',
    cta_button: '发布产品',

    // Submit prompt
    submit_prompt_title: '分享你的作品',
    submit_prompt_desc: '用 Vibe Coding 构建？几分钟内即可提交产品。',
    submit_prompt_btn: '立即发布',

    // Footer
    footer_copyright: '用 Vibe Coding 构建。',
    footer_github: 'GitHub',

    // Product detail
    back_to_products: '返回产品列表',
    about: '关于',
    benefits: '福利',
    benefits_hint: '每个福利项以“福利码/名称 + 说明”保存。',
    contact: '联系方式',
    author: '作者',
    visit: '访问',
    github: 'GitHub',
    view_on_github: '查看 GitHub',
    github_not_provided: '未提供 GitHub',
    loading_product: '加载中...',

    // Submit page
    submit_title: '发布产品',
    submit_subtitle: '通过 GitHub Pull Request 与世界分享你的 Vibe Coding 作品',
    how_to_submit: '如何发布',
    product_format: '产品格式',
    field_reference: '字段说明',
    required_fields: '必填字段',
    categories: '分类',
    optional_fields: '可选字段',
    fork_submit: 'Fork 并发布',
    step1_title: 'Fork 仓库',
    step1_desc: 'Fork 起航号到你的 GitHub 账号',
    step2_title: '创建产品目录',
    step2_desc: '在 products/ 下创建以产品 ID 命名的目录',
    step3_title: '添加 product.json',
    step3_desc: '创建 product.json 文件，填写产品信息',
    step4_title: '添加截图',
    step4_desc: '将产品截图放入目录中',
    step5_title: '提交 Pull Request',
    step5_desc: '推送更改并向主仓库提交 PR',

    // Submit page (new form)
    submit_hero_title: '指挥 AI，上架你的产品',
    submit_hero_subtitle: '填写产品信息，复制提示词给 AI，让它帮你完成剩下的工作',
    copy_for_ai: '复制后给 AI',
    draft_saved: '草稿已保存',
    basic_info: '基本信息',
    contact_info: '联系方式',
    author_info: '作者信息',
    benefits_info: '福利',
    screenshots_info: '产品截图',
    field_name: '产品名称',
    field_tagline: '一句话介绍',
    field_description: '详细介绍',
    field_category: '分类',
    field_tags: '标签',
    field_author_name: '作者名称',
    field_benefit_code: '福利码 / 名称',
    field_benefit_description: '福利说明',
    select_category: '选择分类',
    hint_tagline: '简短有力的一句话（最多50字），例如：AI 驱动的会议纪要助手',
    hint_tags: '按 Enter / 逗号 / 换行添加标签，最多 5 个',
    hint_contact: '至少填写一种联系方式',
    hint_links: '按平台逐条添加产品链接，先选平台再填链接',
    hint_benefits: '可选，填写优惠码、首发折扣或其他权益说明',
    hint_screenshots: '截图将在你提交给 AI 后指导你添加。建议准备 16:9 比例的产品截图。',
    placeholder_name: '例如：VibeShip Copilot',
    placeholder_tagline: '例如：把产品资料一键整理成可提交 PR 的发布页',
    placeholder_description: '例如：## 产品功能\\n自动生成 product.json、整理截图并指导提交流程',
    placeholder_tags: '例如：AI, 自动化, 上架',
    placeholder_github: 'https://github.com/username',
    placeholder_twitter: 'https://twitter.com/username',
    placeholder_email: 'hello@example.com',
    placeholder_wechat: '微信号或公众号',
    placeholder_xiaohongshu: '小红书主页链接',
    placeholder_zhihu: '知乎主页链接',
    placeholder_author_name: '你的名字或团队名',
    placeholder_author_github: 'https://github.com/username',
    placeholder_benefit_code: '例如：LAUNCH20',
    placeholder_benefit_description: '例如：首发用户 20% off',
    need_help: '需要帮助？查看',
    skill_doc: 'Skill 文档',

    // New form fields
    product_links: '产品链接',
    add_product_link: '添加产品链接',
    add_contact: '添加联系方式',
    add_author_contact: '添加作者联系方式',
    add_benefit: '添加福利',
    placeholder_appstore: 'https://apps.apple.com/...',
    placeholder_googleplay: 'https://play.google.com/...',
    placeholder_website: 'https://your-product.com',
    placeholder_windows: 'https://...',
    placeholder_mac: 'https://...',
    placeholder_linux: 'https://...',
    placeholder_chrome: 'https://chrome.google.com/...',
    author_contacts: '作者联系方式',
  }
};

// Current language
let currentLang = 'en';

// Detect browser language - returns 'zh' for Chinese, 'en' for others
function detectBrowserLang() {
  if (typeof navigator === 'undefined') return 'en';

  const lang = navigator.language || navigator.userLanguage || 'en';
  const lowerLang = lang.toLowerCase();

  // Check for Chinese variants: zh, zh-CN, zh-TW, zh-SG, zh-HK, etc.
  if (lowerLang.startsWith('zh')) {
    return 'zh';
  }
  return 'en';
}

// Get language from storage or detect from browser
function getStoredLang() {
  // First check localStorage for saved preference
  if (typeof localStorage !== 'undefined') {
    const stored = localStorage.getItem('vibeship-lang');
    if (stored === 'en' || stored === 'zh') {
      return stored;
    }
  }
  // Fall back to browser language detection
  return detectBrowserLang();
}

// Set language in storage
function setStoredLang(lang) {
  currentLang = lang;
  if (typeof localStorage !== 'undefined') {
    localStorage.setItem('vibeship-lang', lang);
  }
  // Update HTML lang attribute
  document.documentElement.lang = lang;
}

// Get translation
function t(key) {
  return translations[currentLang][key] || translations['en'][key] || key;
}

// Apply translations to page
function applyTranslations() {
  // Navigation
  document.querySelectorAll('[data-i18n="nav_browse"]').forEach(el => el.textContent = t('nav_browse'));
  document.querySelectorAll('[data-i18n="nav_submit"]').forEach(el => el.textContent = t('nav_submit'));
  document.querySelectorAll('[data-i18n="nav_lang_toggle"]').forEach(el => el.textContent = t('nav_lang_toggle'));
  document.querySelectorAll('[data-i18n="nav_logo"]').forEach(el => el.textContent = t('nav_logo'));

  // Hero
  document.querySelectorAll('[data-i18n="hero_title"]').forEach(el => el.textContent = t('hero_title'));
  document.querySelectorAll('[data-i18n="hero_tagline"]').forEach(el => el.textContent = t('hero_tagline'));

  // Submit prompt
  document.querySelectorAll('[data-i18n="submit_prompt_title"]').forEach(el => el.textContent = t('submit_prompt_title'));
  document.querySelectorAll('[data-i18n="submit_prompt_desc"]').forEach(el => el.textContent = t('submit_prompt_desc'));
  document.querySelectorAll('[data-i18n="submit_prompt_btn"]').forEach(el => el.textContent = t('submit_prompt_btn'));

  // Search
  document.querySelectorAll('[data-i18n="search_placeholder"]').forEach(el => el.placeholder = t('search_placeholder'));

  // Categories
  document.querySelectorAll('[data-i18n="cat_all"]').forEach(el => el.textContent = t('cat_all'));
  document.querySelectorAll('[data-i18n="cat_ai"]').forEach(el => el.textContent = t('cat_ai'));
  document.querySelectorAll('[data-i18n="cat_efficiency"]').forEach(el => el.textContent = t('cat_efficiency'));
  document.querySelectorAll('[data-i18n="cat_framework"]').forEach(el => el.textContent = t('cat_framework'));
  document.querySelectorAll('[data-i18n="cat_chrome"]').forEach(el => el.textContent = t('cat_chrome'));
  document.querySelectorAll('[data-i18n="cat_mobile"]').forEach(el => el.textContent = t('cat_mobile'));
  document.querySelectorAll('[data-i18n="cat_saas"]').forEach(el => el.textContent = t('cat_saas'));
  document.querySelectorAll('[data-i18n="cat_content"]').forEach(el => el.textContent = t('cat_content'));
  document.querySelectorAll('[data-i18n="cat_education"]').forEach(el => el.textContent = t('cat_education'));
  document.querySelectorAll('[data-i18n="cat_design"]').forEach(el => el.textContent = t('cat_design'));
  document.querySelectorAll('[data-i18n="cat_data"]').forEach(el => el.textContent = t('cat_data'));
  document.querySelectorAll('[data-i18n="cat_opensource"]').forEach(el => el.textContent = t('cat_opensource'));
  document.querySelectorAll('[data-i18n="cat_other"]').forEach(el => el.textContent = t('cat_other'));

  // Product card
  document.querySelectorAll('[data-i18n="by_author"]').forEach(el => el.textContent = t('by_author'));

  // Empty state
  document.querySelectorAll('[data-i18n="empty_title"]').forEach(el => el.textContent = t('empty_title'));
  document.querySelectorAll('[data-i18n="empty_subtitle"]').forEach(el => el.textContent = t('empty_subtitle'));

  // CTA
  document.querySelectorAll('[data-i18n="cta_title"]').forEach(el => el.textContent = t('cta_title'));
  document.querySelectorAll('[data-i18n="cta_subtitle"]').forEach(el => el.textContent = t('cta_subtitle'));
  document.querySelectorAll('[data-i18n="cta_button"]').forEach(el => el.textContent = t('cta_button'));

  // Footer
  document.querySelectorAll('[data-i18n="footer_copyright"]').forEach(el => el.textContent = t('footer_copyright'));
  document.querySelectorAll('[data-i18n="footer_github"]').forEach(el => el.textContent = t('footer_github'));

  // Product detail
  document.querySelectorAll('[data-i18n="back_to_products"]').forEach(el => el.textContent = t('back_to_products'));
  document.querySelectorAll('[data-i18n="about"]').forEach(el => el.textContent = t('about'));
  document.querySelectorAll('[data-i18n="benefits"]').forEach(el => el.textContent = t('benefits'));
  document.querySelectorAll('[data-i18n="benefits_hint"]').forEach(el => el.textContent = t('benefits_hint'));
  document.querySelectorAll('[data-i18n="contact"]').forEach(el => el.textContent = t('contact'));
  document.querySelectorAll('[data-i18n="author"]').forEach(el => el.textContent = t('author'));
  document.querySelectorAll('[data-i18n="visit"]').forEach(el => el.textContent = t('visit'));
  document.querySelectorAll('[data-i18n="github"]').forEach(el => el.textContent = t('github'));
  document.querySelectorAll('[data-i18n="view_on_github"]').forEach(el => el.textContent = t('view_on_github'));
  document.querySelectorAll('[data-i18n="github_not_provided"]').forEach(el => el.textContent = t('github_not_provided'));
  document.querySelectorAll('[data-i18n="loading_product"]').forEach(el => el.textContent = t('loading_product'));

  // Submit page
  document.querySelectorAll('[data-i18n="submit_title"]').forEach(el => el.textContent = t('submit_title'));
  document.querySelectorAll('[data-i18n="submit_subtitle"]').forEach(el => el.textContent = t('submit_subtitle'));
  document.querySelectorAll('[data-i18n="how_to_submit"]').forEach(el => el.textContent = t('how_to_submit'));
  document.querySelectorAll('[data-i18n="product_format"]').forEach(el => el.textContent = t('product_format'));
  document.querySelectorAll('[data-i18n="field_reference"]').forEach(el => el.textContent = t('field_reference'));
  document.querySelectorAll('[data-i18n="required_fields"]').forEach(el => el.textContent = t('required_fields'));
  document.querySelectorAll('[data-i18n="categories"]').forEach(el => el.textContent = t('categories'));
  document.querySelectorAll('[data-i18n="optional_fields"]').forEach(el => el.textContent = t('optional_fields'));
  document.querySelectorAll('[data-i18n="fork_submit"]').forEach(el => el.textContent = t('fork_submit'));
  document.querySelectorAll('[data-i18n="step1_title"]').forEach(el => el.textContent = t('step1_title'));
  document.querySelectorAll('[data-i18n="step1_desc"]').forEach(el => el.textContent = t('step1_desc'));
  document.querySelectorAll('[data-i18n="step2_title"]').forEach(el => el.textContent = t('step2_title'));
  document.querySelectorAll('[data-i18n="step2_desc"]').forEach(el => el.textContent = t('step2_desc'));
  document.querySelectorAll('[data-i18n="step3_title"]').forEach(el => el.textContent = t('step3_title'));
  document.querySelectorAll('[data-i18n="step3_desc"]').forEach(el => el.textContent = t('step3_desc'));
  document.querySelectorAll('[data-i18n="step4_title"]').forEach(el => el.textContent = t('step4_title'));
  document.querySelectorAll('[data-i18n="step4_desc"]').forEach(el => el.textContent = t('step4_desc'));
  document.querySelectorAll('[data-i18n="step5_title"]').forEach(el => el.textContent = t('step5_title'));
  document.querySelectorAll('[data-i18n="step5_desc"]').forEach(el => el.textContent = t('step5_desc'));

  // New Submit page (form)
  document.querySelectorAll('[data-i18n="submit_hero_title"]').forEach(el => el.textContent = t('submit_hero_title'));
  document.querySelectorAll('[data-i18n="submit_hero_subtitle"]').forEach(el => el.textContent = t('submit_hero_subtitle'));
  document.querySelectorAll('[data-i18n="copy_for_ai"]').forEach(el => el.textContent = t('copy_for_ai'));
  document.querySelectorAll('[data-i18n="draft_saved"]').forEach(el => el.textContent = t('draft_saved'));
  document.querySelectorAll('[data-i18n="basic_info"]').forEach(el => el.textContent = t('basic_info'));
  document.querySelectorAll('[data-i18n="contact_info"]').forEach(el => el.textContent = t('contact_info'));
  document.querySelectorAll('[data-i18n="author_info"]').forEach(el => el.textContent = t('author_info'));
  document.querySelectorAll('[data-i18n="benefits_info"]').forEach(el => el.textContent = t('benefits_info'));
  document.querySelectorAll('[data-i18n="screenshots_info"]').forEach(el => el.textContent = t('screenshots_info'));
  document.querySelectorAll('[data-i18n="field_name"]').forEach(el => el.textContent = t('field_name'));
  document.querySelectorAll('[data-i18n="field_tagline"]').forEach(el => el.textContent = t('field_tagline'));
  document.querySelectorAll('[data-i18n="field_description"]').forEach(el => el.textContent = t('field_description'));
  document.querySelectorAll('[data-i18n="field_category"]').forEach(el => el.textContent = t('field_category'));
  document.querySelectorAll('[data-i18n="field_tags"]').forEach(el => el.textContent = t('field_tags'));
  document.querySelectorAll('[data-i18n="field_author_name"]').forEach(el => el.textContent = t('field_author_name'));
  document.querySelectorAll('[data-i18n="field_benefit_code"]').forEach(el => el.textContent = t('field_benefit_code'));
  document.querySelectorAll('[data-i18n="field_benefit_description"]').forEach(el => el.textContent = t('field_benefit_description'));
  document.querySelectorAll('[data-i18n="select_category"]').forEach(el => el.textContent = t('select_category'));
  document.querySelectorAll('[data-i18n="hint_tagline"]').forEach(el => el.textContent = t('hint_tagline'));
  document.querySelectorAll('[data-i18n="hint_tags"]').forEach(el => el.textContent = t('hint_tags'));
  document.querySelectorAll('[data-i18n="hint_contact"]').forEach(el => el.textContent = t('hint_contact'));
  document.querySelectorAll('[data-i18n="hint_links"]').forEach(el => el.textContent = t('hint_links'));
  document.querySelectorAll('[data-i18n="hint_benefits"]').forEach(el => el.textContent = t('hint_benefits'));
  document.querySelectorAll('[data-i18n="hint_screenshots"]').forEach(el => el.textContent = t('hint_screenshots'));
  document.querySelectorAll('[data-i18n-placeholder="placeholder_name"]').forEach(el => el.placeholder = t('placeholder_name'));
  document.querySelectorAll('[data-i18n-placeholder="placeholder_tagline"]').forEach(el => el.placeholder = t('placeholder_tagline'));
  document.querySelectorAll('[data-i18n-placeholder="placeholder_description"]').forEach(el => el.placeholder = t('placeholder_description'));
  document.querySelectorAll('[data-i18n-placeholder="placeholder_tags"]').forEach(el => el.placeholder = t('placeholder_tags'));
  document.querySelectorAll('[data-i18n-placeholder="placeholder_github"]').forEach(el => el.placeholder = t('placeholder_github'));
  document.querySelectorAll('[data-i18n-placeholder="placeholder_twitter"]').forEach(el => el.placeholder = t('placeholder_twitter'));
  document.querySelectorAll('[data-i18n-placeholder="placeholder_email"]').forEach(el => el.placeholder = t('placeholder_email'));
  document.querySelectorAll('[data-i18n-placeholder="placeholder_wechat"]').forEach(el => el.placeholder = t('placeholder_wechat'));
  document.querySelectorAll('[data-i18n-placeholder="placeholder_xiaohongshu"]').forEach(el => el.placeholder = t('placeholder_xiaohongshu'));
  document.querySelectorAll('[data-i18n-placeholder="placeholder_zhihu"]').forEach(el => el.placeholder = t('placeholder_zhihu'));
  document.querySelectorAll('[data-i18n-placeholder="placeholder_author_name"]').forEach(el => el.placeholder = t('placeholder_author_name'));
  document.querySelectorAll('[data-i18n-placeholder="placeholder_author_github"]').forEach(el => el.placeholder = t('placeholder_author_github'));
  document.querySelectorAll('[data-i18n-placeholder="placeholder_benefit_code"]').forEach(el => el.placeholder = t('placeholder_benefit_code'));
  document.querySelectorAll('[data-i18n-placeholder="placeholder_benefit_description"]').forEach(el => el.placeholder = t('placeholder_benefit_description'));
  document.querySelectorAll('[data-i18n="need_help"]').forEach(el => el.textContent = t('need_help'));
  document.querySelectorAll('[data-i18n="skill_doc"]').forEach(el => el.textContent = t('skill_doc'));
  document.querySelectorAll('[data-i18n="product_links"]').forEach(el => el.textContent = t('product_links'));
  document.querySelectorAll('[data-i18n="add_product_link"]').forEach(el => el.textContent = t('add_product_link'));
  document.querySelectorAll('[data-i18n="add_contact"]').forEach(el => el.textContent = t('add_contact'));
  document.querySelectorAll('[data-i18n="add_author_contact"]').forEach(el => el.textContent = t('add_author_contact'));
  document.querySelectorAll('[data-i18n="add_benefit"]').forEach(el => el.textContent = t('add_benefit'));
  document.querySelectorAll('[data-i18n="author_contacts"]').forEach(el => el.textContent = t('author_contacts'));
  document.querySelectorAll('[data-i18n-placeholder="placeholder_appstore"]').forEach(el => el.placeholder = t('placeholder_appstore'));
  document.querySelectorAll('[data-i18n-placeholder="placeholder_googleplay"]').forEach(el => el.placeholder = t('placeholder_googleplay'));
  document.querySelectorAll('[data-i18n-placeholder="placeholder_website"]').forEach(el => el.placeholder = t('placeholder_website'));
  document.querySelectorAll('[data-i18n-placeholder="placeholder_windows"]').forEach(el => el.placeholder = t('placeholder_windows'));
  document.querySelectorAll('[data-i18n-placeholder="placeholder_mac"]').forEach(el => el.placeholder = t('placeholder_mac'));
  document.querySelectorAll('[data-i18n-placeholder="placeholder_linux"]').forEach(el => el.placeholder = t('placeholder_linux'));
  document.querySelectorAll('[data-i18n-placeholder="placeholder_chrome"]').forEach(el => el.placeholder = t('placeholder_chrome'));
}

// Toggle language
function toggleLang() {
  const newLang = currentLang === 'en' ? 'zh' : 'en';
  setStoredLang(newLang);
  applyTranslations();
}

// Initialize i18n
function initI18n() {
  currentLang = getStoredLang();
  // Set HTML lang attribute for accessibility
  document.documentElement.lang = currentLang;
  applyTranslations();
}

// Export for use
window.i18n = {
  init: initI18n,
  t: t,
  toggle: toggleLang,
  getLang: () => currentLang
};

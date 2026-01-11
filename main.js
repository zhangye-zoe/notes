// main.js
// Ye Zhang - Reading Notes

document.addEventListener('DOMContentLoaded', () => {
  // -----------------------------
  // 0. DOM 引用
  // -----------------------------
  const summaries = document.querySelectorAll('.nav-summary[data-category]');
  const sections = document.querySelectorAll('.post-list-section');

  const mainTitle = document.getElementById('main-title');
  const mainDescription = document.getElementById('main-description');
  const crumbCategory = document.getElementById('crumb-category');

  const contentViewer = document.querySelector('.content-viewer');
  const contentFrame = document.getElementById('content-frame');
  const postListsWrapper = document.getElementById('post-lists');

  const homeNavLink = document.querySelector('.nav-link-home');
  const homeCrumbLink = document.querySelector('.crumb-home');

  const xLink = document.getElementById('share-x');
  const linkedinLink = document.getElementById('share-linkedin');
  const copyButtons = document.querySelectorAll('.share-btn[data-platform]');
  const toast = document.getElementById('share-toast');

  const themeToggleBtn = document.getElementById('theme-toggle');
  const themeIcon = themeToggleBtn
    ? themeToggleBtn.querySelector('.theme-toggle-icon')
    : null;
  const themeLabel = themeToggleBtn
    ? themeToggleBtn.querySelector('.theme-toggle-label')
    : null;

  const pageUrl = window.location.href;
  const pageTitle = document.title || "Ye's Reading Notes";

  // -----------------------------
  // 1. 视图切换：列表视图 / 单篇笔记视图
  // -----------------------------
  function switchToListView() {
    if (contentViewer) contentViewer.style.display = 'none';
    if (postListsWrapper) postListsWrapper.style.display = '';
  }

  function switchToNoteView() {
    if (contentViewer) contentViewer.style.display = '';
    if (postListsWrapper) postListsWrapper.style.display = 'none';
  }

  // -----------------------------
  // 2. 分类切换（左侧目录）
  // -----------------------------

  const descriptions = {
    all: 'A lightweight daily log of what I read, think, and try.',
    'multi-omics':
      'Notes on methods and ideas for integrating histology with transcriptomics, epigenomics, and other omics layers.',
    pathology:
      'Notes on computational pathology, including nuclei segmentation, diagnosis, and prognosis.',
    multimodal:
      'Notes on multimodal learning and foundation models for biology and pathology.'
  };

  function showCategory(category) {
    // 总是回到列表视图
    switchToListView();

    // 控制各个 section 显隐（只影响有 data-category 的列表区）
    sections.forEach(section => {
      const cat = section.getAttribute('data-category');
      section.style.display = (cat === category) ? '' : 'none';
    });

    // 更新标题和面包屑
    if (category === 'all') {
      mainTitle.textContent = 'All Notes · Daily Log';
      crumbCategory.textContent = 'All Notes';
    } else if (category === 'multi-omics') {
      mainTitle.textContent = 'Multi-omics';
      crumbCategory.textContent = 'Multi-omics';
    } else if (category === 'pathology') {
      mainTitle.textContent = 'Pathology';
      crumbCategory.textContent = 'Pathology';
    } else if (category === 'multimodal') {
      mainTitle.textContent = 'Multimodal & Foundation Models';
      crumbCategory.textContent = 'Multimodal & Foundation Models';
    }

    mainDescription.textContent = descriptions[category] || descriptions.all;

    // 左侧高亮当前分类
    summaries.forEach(s => s.classList.remove('nav-summary-active'));
    summaries.forEach(s => {
      if (s.dataset.category === category) {
        s.classList.add('nav-summary-active');
      }
    });
  }

  // 左侧 summary 点击切换分类
  summaries.forEach(summary => {
    summary.addEventListener('click', function () {
      const category = this.getAttribute('data-category');
      if (category) showCategory(category);
    });
  });

  // details 手风琴效果
  const detailGroups = document.querySelectorAll('.sidebar details.nav-group');
  detailGroups.forEach(detailsEl => {
    detailsEl.addEventListener('toggle', () => {
      if (detailsEl.open) {
        detailGroups.forEach(other => {
          if (other !== detailsEl) other.open = false;
        });
      }
    });
  });

  // -----------------------------
  // 3. 单篇阅读笔记：在 iframe 中打开
  // -----------------------------
  function openNoteInFrame(href) {
    if (!contentFrame || !href) return;

    switchToNoteView();
    contentFrame.setAttribute('src', href);

    mainTitle.textContent = 'Reading Note';
    crumbCategory.textContent = 'Note';
    mainDescription.textContent =
      'Single reading note view. Use the sidebar to switch papers or go back to the overview.';

    window.scrollTo({ top: 0, behavior: 'auto' });
  }

  function bindNoteLink(link) {
    if (!link) return;
    link.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      // #today / #recent 这类锚点不拦截
      if (!href || href.startsWith('#')) return;
      e.preventDefault();
      openNoteInFrame(href);
    });
  }

  // 左侧目录中 target="content-frame" 的链接
  document
    .querySelectorAll('a[target="content-frame"]')
    .forEach(bindNoteLink);

  // 首页卡片标题（建议带 href + target="content-frame"）
  document
    .querySelectorAll('.post-card a.post-card-title')
    .forEach(bindNoteLink);

  // -----------------------------
  // 4. HOME：回到总览视图
  // -----------------------------
  function goHome() {
    switchToListView();
    // 显示 all 列表
    showCategory('all');

    // 重置标题和描述为欢迎语
    mainTitle.textContent = 'Welcome · Ye\'s Reading Notes';
    crumbCategory.textContent = 'Overview';
    mainDescription.textContent =
      'A lightweight, opinionated notebook where I log what I read about computational pathology, nuclei segmentation, spatial & multi-omics integration, and multimodal / foundation models.';

    if (contentFrame) {
      contentFrame.removeAttribute('src');
    }
  }

  [homeNavLink, homeCrumbLink].forEach(el => {
    if (!el) return;
    el.addEventListener('click', e => {
      e.preventDefault();
      goHome();
      window.location.hash = '#home';
    });
  });

  // -----------------------------
  // 5. 分享按钮
  // -----------------------------
  // X
  if (xLink) {
    const text = pageTitle + ' - Reading notes';
    xLink.href =
      'https://x.com/intent/post?text=' +
      encodeURIComponent(text) +
      '&url=' +
      encodeURIComponent(pageUrl);
  }

  // LinkedIn
  if (linkedinLink) {
    linkedinLink.href =
      'https://www.linkedin.com/sharing/share-offsite/?url=' +
      encodeURIComponent(pageUrl);
  }

  // Zhihu / RedNote / WeChat：复制链接
  copyButtons.forEach(btn => {
    btn.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(pageUrl);

        if (toast) {
          const platform = btn.dataset.platform || 'this app';
          toast.textContent = 'Link copied, paste into ' + platform;
          toast.classList.add('show');
          setTimeout(() => toast.classList.remove('show'), 1600);
        } else {
          alert('Link copied. Paste into the app.');
        }
      } catch (err) {
        alert('Copy failed, please copy the URL manually.');
      }
    });
  });

  // -----------------------------
  // 6. 主题：深色 / 浅色模式
  // -----------------------------
  function applyTheme(theme) {
    document.body.setAttribute('data-theme', theme);
  
    if (themeIcon && themeLabel) {
      if (theme === 'dark') {
        // 当前是暗色 → 提示用户可以切换到日间
        themeIcon.textContent = '☀️';
        themeLabel.textContent = 'Light mode';
        themeToggleBtn.title = 'Switch to light mode';
      } else {
        // 当前是亮色 → 提示用户可以切换到夜间
        themeIcon.textContent = '🌙';
        themeLabel.textContent = 'Dark mode';
        themeToggleBtn.title = 'Switch to dark mode';
      }
    }
  }
  
  // 读取本地主题或系统偏好
  const storedTheme = window.localStorage.getItem('ye-reading-theme');
  if (storedTheme === 'light' || storedTheme === 'dark') {
    applyTheme(storedTheme);
  } else {
    const prefersDark =
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches;
    applyTheme(prefersDark ? 'dark' : 'light');
  }
  
  // 点击切换
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const current = document.body.getAttribute('data-theme') || 'light';
      const next = current === 'light' ? 'dark' : 'light';
      applyTheme(next);
      window.localStorage.setItem('ye-reading-theme', next);
    });
  }


    // -----------------------------
  // 7. 回到顶部按钮
  // -----------------------------
  const backToTopBtn = document.getElementById('back-to-top');

  if (backToTopBtn) {
    // 滚动时控制显示/隐藏
    window.addEventListener('scroll', () => {
      if (window.scrollY > 200) {
        backToTopBtn.classList.add('show');
      } else {
        backToTopBtn.classList.remove('show');
      }
    });

    // 点击平滑回顶部
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // -----------------------------
  // 8. 页面初始状态
  // -----------------------------
  goHome(); // 展示 HOME + All Notes，隐藏 iframe
});

/**
 * Festive World: US & UK Traditions
 * Main JavaScript Application File
 * Supporting Responsive Layout, Web Speech API, Interactive Timers & Cultural Tools
 */

(function () {
  'use strict';

  // --- 1. ROUTING & TAB NAVIGATION ---
  const validTabs = ['home', 'winter', 'spring', 'summer', 'autumn'];
  let currentTab = 'home';

  function setActiveTab(tabId, updateHash = true) {
    if (!validTabs.includes(tabId)) {
      tabId = 'home';
    }
    currentTab = tabId;

    if (updateHash && window.location.hash !== `#${tabId}`) {
      window.location.hash = tabId;
    }

    // Update Tab Content Sections
    validTabs.forEach(id => {
      const section = document.getElementById(`tab-${id}`);
      if (section) {
        if (id === tabId) {
          section.classList.add('active');
        } else {
          section.classList.remove('active');
        }
      }
    });

    // Update Desktop Nav Links
    document.querySelectorAll('.desktop-nav-link').forEach(link => {
      const path = link.getAttribute('data-path');
      if (path === tabId) {
        link.className = 'desktop-nav-link px-space-md py-space-sm font-label-lg text-label-lg transition-colors bg-primary-container text-on-primary font-semibold rounded-lg shadow-sm';
        link.setAttribute('aria-current', 'page');
      } else {
        link.className = 'desktop-nav-link px-space-md py-space-sm font-label-lg text-label-lg text-on-surface-variant hover:text-on-surface transition-colors rounded-lg';
        link.removeAttribute('aria-current');
      }
    });

    // Update Mobile Nav Links
    document.querySelectorAll('.mobile-nav-link').forEach(link => {
      const path = link.getAttribute('data-path');
      if (path === tabId) {
        link.className = 'mobile-nav-link flex flex-col items-center justify-center min-w-[56px] h-12 rounded-xl transition-colors text-primary font-bold bg-surface-container-low';
        link.setAttribute('aria-current', 'page');
      } else {
        link.className = 'mobile-nav-link flex flex-col items-center justify-center min-w-[56px] h-12 rounded-xl text-on-surface-variant transition-colors';
        link.removeAttribute('aria-current');
      }
    });

    // Update page title
    const titles = {
      home: 'Festive World: US & UK Traditions | American & British Holidays',
      winter: 'Winter Traditions: Christmas & Boxing Day | Festive World',
      spring: 'Spring Occasions: St. Patrick’s Day & Easter | Festive World',
      summer: 'Summer Events: 4th of July & Notting Hill Carnival | Festive World',
      autumn: 'Autumn Gatherings: Halloween, Thanksgiving & Guy Fawkes | Festive World'
    };
    document.title = titles[tabId] || titles.home;

    // Smooth scroll to top of main content
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function initNavigation() {
    // Check initial hash
    const initialHash = window.location.hash.replace('#', '').toLowerCase();
    if (validTabs.includes(initialHash)) {
      setActiveTab(initialHash, false);
    } else {
      setActiveTab('home', false);
    }

    // Listen to hash changes
    window.addEventListener('hashchange', () => {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      if (validTabs.includes(hash)) {
        setActiveTab(hash, false);
      }
    });

    // Handle all data-path clicks
    document.addEventListener('click', (e) => {
      const target = e.target.closest('[data-path]');
      if (target) {
        const path = target.getAttribute('data-path');
        if (path) {
          e.preventDefault();
          setActiveTab(path, true);
        }
      }
    });
  }

  // --- 2. AUDIO PRONUNCIATION (WEB SPEECH API) ---
  function speak(text, lang = 'en-US', rate = 0.9) {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel(); // Stop any currently playing audio
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = lang;
      utterance.rate = rate;
      window.speechSynthesis.speak(utterance);
    } else {
      showToast('Speech audio is not supported in this browser.', 'warning');
    }
  }

  window.playAudioTone = function (accent) {
    speak(
      accent === 'us'
        ? "People of all backgrounds wear green and celebrate Irish culture on March 17th in major American cities."
        : "Children carry small wicker baskets while searching for hidden chocolate eggs in the garden.",
      accent === 'us' ? 'en-US' : 'en-GB'
    );
  };

  window.playPronounce = function (word, phonetic) {
    speak(word, 'en-US', 0.85);
    const toast = document.getElementById('pronounceToast');
    if (toast) {
      document.getElementById('toastWord').textContent = word;
      document.getElementById('toastPhonetic').textContent = phonetic || '';
      toast.classList.remove('translate-y-24', 'opacity-0');
      toast.classList.add('translate-y-0', 'opacity-100');
      setTimeout(() => {
        toast.classList.remove('translate-y-0', 'opacity-100');
        toast.classList.add('translate-y-24', 'opacity-0');
      }, 2600);
    }
  };

  window.playSentence = function (text, lang = 'en-US') {
    speak(text, lang, 0.9);
  };

  window.playAccentAudio = function (locale) {
    const text = locale === 'us'
      ? "American families often gather around the Christmas tree to open gifts on Christmas morning."
      : "In the United Kingdom, wearing a paper crown from a Christmas cracker is a beloved dinner custom.";
    speak(text, locale === 'us' ? 'en-US' : 'en-GB', 0.9);
  };

  // --- 3. TOAST NOTIFICATIONS ---
  function showToast(message, type = 'success') {
    const toast = document.getElementById('toast-container');
    const toastText = document.getElementById('toast-text');
    const toastIcon = document.getElementById('toast-icon');

    if (!toast || !toastText) return;

    toastText.textContent = message;
    if (toastIcon) {
      toastIcon.textContent = type === 'warning' ? 'warning' : 'check_circle';
    }

    toast.classList.remove('toast-hidden');
    toast.classList.add('toast-visible');

    setTimeout(() => {
      toast.classList.remove('toast-visible');
      toast.classList.add('toast-hidden');
    }, 2800);
  }

  // --- 4. VOCABULARY MODAL ---
  const vocabModal = document.getElementById('vocab-modal');
  const vocabCard = document.getElementById('vocab-card');

  window.showDefinition = function (word, pos, ipa, meaning) {
    const termEl = document.getElementById('vocab-term');
    const posEl = document.getElementById('vocab-pos');
    const ipaEl = document.getElementById('vocab-ipa');
    const defEl = document.getElementById('vocab-meaning');

    if (termEl) termEl.textContent = word;
    if (posEl) posEl.textContent = pos || 'noun';
    if (ipaEl) ipaEl.textContent = ipa || '';
    if (defEl) defEl.textContent = meaning || '';

    if (vocabModal) {
      vocabModal.classList.remove('hidden');
      vocabModal.classList.add('flex');
    }
    speak(word, 'en-US', 0.85);
  };

  window.closeDefinition = function () {
    if (vocabModal) {
      vocabModal.classList.add('hidden');
      vocabModal.classList.remove('flex');
    }
  };

  window.playSampleWord = function () {
    const word = document.getElementById('vocab-term')?.textContent || '';
    if (word) speak(word, 'en-US', 0.85);
  };

  // Close modal when clicking outside
  if (vocabModal) {
    vocabModal.addEventListener('click', (e) => {
      if (e.target === vocabModal) {
        closeDefinition();
      }
    });
  }

  // --- 5. TIMERS & CULTURAL DISCUSSION TOOLS ---
  // Winter 5-Min Timer
  let winterInterval = null;
  let winterSeconds = 300;

  window.startDiscussionTimer = function () {
    const btn = document.getElementById('timer-display');
    if (!btn) return;

    if (winterInterval) {
      clearInterval(winterInterval);
      winterInterval = null;
      btn.textContent = 'Resume 5m Timer';
      return;
    }

    winterInterval = setInterval(() => {
      if (winterSeconds <= 0) {
        clearInterval(winterInterval);
        winterInterval = null;
        btn.textContent = "Time's Up! 🎉";
        showToast("Discussion Time's Up! Wrap up your thoughts on these traditions.");
        return;
      }
      winterSeconds--;
      const mins = Math.floor(winterSeconds / 60);
      const secs = winterSeconds % 60;
      btn.textContent = `${mins}:${secs < 10 ? '0' : ''}${secs}`;
    }, 1000);
  };

  window.pickRandomSpeaker = function () {
    const roles = [
      'Perspective: American Holiday Traditions',
      'Perspective: British Holiday Traditions',
      'Perspective: Traditional Festive Feasts & Foods',
      'Perspective: Historical Folklore & Origins',
      'Perspective: Civic Celebrations & Parades',
      'Perspective: Community Spirit & Seasonal Atmosphere'
    ];
    const pick = roles[Math.floor(Math.random() * roles.length)];
    showToast(`Selected: ${pick} - Share your thoughts on this custom!`);
  };

  window.switchActivityView = function (view) {
    const venn = document.getElementById('view-venn-container');
    const table = document.getElementById('view-table-container');
    const btnVenn = document.getElementById('btn-view-venn');
    const btnTable = document.getElementById('btn-view-table');

    if (!venn || !table) return;

    if (view === 'venn') {
      venn.classList.remove('hidden');
      table.classList.add('hidden');
      if (btnVenn) btnVenn.className = 'px-4 py-2 rounded-lg font-label-md text-label-md font-semibold bg-primary text-on-primary transition-all shadow-sm';
      if (btnTable) btnTable.className = 'px-4 py-2 rounded-lg font-label-md text-label-md font-semibold text-on-surface-variant hover:text-on-surface transition-all';
    } else {
      venn.classList.add('hidden');
      table.classList.remove('hidden');
      if (btnTable) btnTable.className = 'px-4 py-2 rounded-lg font-label-md text-label-md font-semibold bg-primary text-on-primary transition-all shadow-sm';
      if (btnVenn) btnVenn.className = 'px-4 py-2 rounded-lg font-label-md text-label-md font-semibold text-on-surface-variant hover:text-on-surface transition-all';
    }
  };

  // Summer 2-Min Timer
  let summerInterval = null;
  let summerSeconds = 120;

  function renderSummerTime() {
    const timerDisplay = document.getElementById('discussion-timer');
    if (!timerDisplay) return;
    const mins = Math.floor(summerSeconds / 60);
    const secs = summerSeconds % 60;
    timerDisplay.textContent = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  }

  function initSummerControls() {
    const toggleBtn = document.getElementById('timer-toggle-btn');
    const resetBtn = document.getElementById('timer-reset-btn');

    if (toggleBtn) {
      toggleBtn.addEventListener('click', () => {
        if (summerInterval) {
          clearInterval(summerInterval);
          summerInterval = null;
          toggleBtn.textContent = 'Resume Discussion';
        } else {
          toggleBtn.textContent = 'Pause Discussion';
          summerInterval = setInterval(() => {
            if (summerSeconds > 0) {
              summerSeconds--;
              renderSummerTime();
            } else {
              clearInterval(summerInterval);
              summerInterval = null;
              toggleBtn.textContent = 'Time Up! 🎉';
              showToast("Time's up for Summer Traditions Discussion!");
            }
          }, 1000);
        }
      });
    }

    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        if (summerInterval) {
          clearInterval(summerInterval);
          summerInterval = null;
        }
        summerSeconds = 120;
        renderSummerTime();
        if (toggleBtn) toggleBtn.textContent = 'Start Traditions Discussion';
      });
    }

    // Pronounce all summer terms sequence
    const pronounceAllBtn = document.getElementById('pronounce-all-btn');
    if (pronounceAllBtn) {
      pronounceAllBtn.addEventListener('click', () => {
        const terms = ["Independence Day", "Backyard Barbecue", "Notting Hill Carnival", "Masquerade", "Sound Systems"];
        let index = 0;
        function playNext() {
          if (index >= terms.length) return;
          speak(terms[index], 'en-US', 0.88);
          index++;
          setTimeout(playNext, 1200);
        }
        playNext();
        showToast("Playing 5 Essential Summer Celebrations Audio...");
      });
    }

    // Summer Stacked / Dual Slide View Toggle
    const viewModeBtn = document.getElementById('view-mode-btn');
    const viewModeText = document.getElementById('view-mode-text');
    const comparisonGrid = document.getElementById('comparison-container');
    let isSingleCol = false;

    if (viewModeBtn && comparisonGrid) {
      viewModeBtn.addEventListener('click', () => {
        isSingleCol = !isSingleCol;
        if (isSingleCol) {
          comparisonGrid.classList.remove('lg:grid-cols-2');
          comparisonGrid.classList.add('grid-cols-1');
          if (viewModeText) viewModeText.textContent = "Stacked Focus View";
        } else {
          comparisonGrid.classList.add('lg:grid-cols-2');
          comparisonGrid.classList.remove('grid-cols-1');
          if (viewModeText) viewModeText.textContent = "Full Dual Slide";
        }
      });
    }

    // Summer Vocabulary Term Buttons
    document.querySelectorAll('.vocab-term').forEach(btn => {
      btn.addEventListener('click', () => {
        const term = btn.getAttribute('data-term');
        const def = btn.getAttribute('data-def');
        const phonetic = btn.getAttribute('data-phonetic');
        const display = document.getElementById('vocab-display');

        if (display) {
          document.getElementById('vocab-word').textContent = term;
          document.getElementById('vocab-ipa').textContent = phonetic || '';
          document.getElementById('vocab-meaning').textContent = def || '';
          display.classList.remove('hidden');
        }
        speak(term, 'en-US', 0.85);
      });
    });

    const closeVocabBtn = document.getElementById('close-vocab-btn');
    if (closeVocabBtn) {
      closeVocabBtn.addEventListener('click', () => {
        const display = document.getElementById('vocab-display');
        if (display) display.classList.add('hidden');
      });
    }
  }

  // --- 6. CULTURAL TRIVIA INTERACTION ---
  window.checkAnswer = function (btn, isCorrect) {
    const feedback = document.getElementById('quiz-feedback');
    if (!feedback) return;

    feedback.classList.remove('hidden');
    if (isCorrect) {
      feedback.innerHTML = "✓ <strong>Correct!</strong> 'So that' is followed by the subject (<em>visitors</em>) + modal (<em>can</em>) to express outcome.";
      feedback.className = "text-label-sm font-label-sm text-tertiary-container font-bold pt-1.5";
      btn.className = "flex-1 py-2 px-3 rounded-lg bg-tertiary-fixed text-on-tertiary-fixed font-label-md text-label-md shadow-sm text-center font-bold";
    } else {
      feedback.innerHTML = "✗ <strong>Try again:</strong> 'In order to' requires an immediate base infinitive verb, not a subject clause.";
      feedback.className = "text-label-sm font-label-sm text-error font-medium pt-1.5";
      btn.className = "flex-1 py-2 px-3 rounded-lg bg-error-container text-on-error-container font-label-md text-label-md shadow-sm text-center";
    }
  };

  // Spring Vocabulary Tooltip / Audio
  window.playPhonetic = function (term, ipa, def) {
    const container = document.getElementById('vocab-display-spring');
    if (container) {
      document.getElementById('vocab-term-spring').textContent = term;
      document.getElementById('vocab-ipa-spring').textContent = ipa;
      document.getElementById('vocab-def-spring').textContent = def;
      container.classList.remove('hidden');
    }
    speak(term, 'en-US', 0.85);
  };

  // --- 7. AUTUMN WRITTEN DRAFT PAD & NOTES PORTFOLIO ---
  window.toggleDiscussionDraft = function () {
    const box = document.getElementById('discussion-draft-box');
    if (box) {
      box.classList.toggle('hidden');
      if (!box.classList.contains('hidden')) {
        const textarea = document.getElementById('discussion-input');
        if (textarea) textarea.focus();
      }
    }
  };

  window.saveDiscussionDraft = function () {
    const input = document.getElementById('discussion-input');
    const status = document.getElementById('draft-status');
    if (!input) return;

    const val = input.value.trim();
    if (val.length > 0) {
      localStorage.setItem('festive_autumn_draft', val);
      if (status) {
        status.textContent = 'Saved to holiday notebook! ✓';
        status.classList.add('text-tertiary-fixed', 'font-bold');
        setTimeout(() => {
          status.textContent = 'Saved locally';
          status.classList.remove('font-bold');
        }, 3000);
      }
      showToast('Reflections saved to personal notebook!');
    } else {
      if (status) status.textContent = 'Please type a reflection first.';
    }
  };

  window.copyPromptText = function () {
    const text = "Look back at all four seasons (Winter, Spring, Summer, Autumn). Which holiday traditions reflect the deepest historical roots, and why?";
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text).then(() => {
        showToast('Reflection prompt copied to clipboard!');
      });
    } else {
      showToast('Copied question to clipboard!');
    }
  };

  // --- 8. OBJECTIVES DRAWER & SPEECH STARTERS ---
  function initHomeInteractions() {
    const objBtn = document.getElementById('objectives-toggle');
    const objDrawer = document.getElementById('objectives-drawer');
    if (objBtn && objDrawer) {
      objBtn.addEventListener('click', () => {
        objDrawer.classList.toggle('hidden');
        objDrawer.classList.toggle('flex');
      });
    }

    // Speech starter copy buttons
    document.querySelectorAll('.speech-starter-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const starter = btn.getAttribute('data-starter');
        if (starter) {
          if (navigator.clipboard) {
            navigator.clipboard.writeText(starter).catch(() => {});
          }
          speak(starter.replace('...', ''), 'en-US', 0.9);
          showToast(`Copied phrase: "${btn.querySelector('.font-bold')?.textContent || 'Sentence starter'}"`);
        }
      });
    });

    // Load saved draft if present
    const savedDraft = localStorage.getItem('festive_autumn_draft');
    const draftInput = document.getElementById('discussion-input');
    if (savedDraft && draftInput) {
      draftInput.value = savedDraft;
    }
  }

  // --- 9. WHITEBOARD FOCUS TOGGLE ---
  function initWhiteboardToggle() {
    const btn = document.getElementById('viewToggleBtn');
    if (btn) {
      let isFocus = false;
      btn.addEventListener('click', () => {
        isFocus = !isFocus;
        document.body.classList.toggle('whiteboard-focus-mode', isFocus);
        const textSpan = btn.querySelector('span:last-child');
        if (textSpan) {
          textSpan.textContent = isFocus ? 'Focus: Active' : 'Focus: All Cards';
        }
        showToast(isFocus ? 'Presentation High-Contrast Mode Activated' : 'Standard View Restored');
      });
    }
  }

  // --- 10. DARK MODE THEME CONTROLLER ---
  function applyTheme(isDark) {
    const icon = document.getElementById('theme-toggle-icon');
    const btn = document.getElementById('theme-toggle');
    if (isDark) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
      if (icon) icon.textContent = 'light_mode';
      if (btn) btn.title = 'Alternar para modo claro';
    } else {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
      if (icon) icon.textContent = 'dark_mode';
      if (btn) btn.title = 'Alternar para modo escuro';
    }
  }

  function initTheme() {
    const themeToggleBtn = document.getElementById('theme-toggle');
    let isDark = false;
    try {
      const savedTheme = localStorage.getItem('festive_theme');
      const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      isDark = savedTheme === 'dark' || (!savedTheme && prefersDark);
    } catch (e) {}

    applyTheme(isDark);

    if (themeToggleBtn) {
      themeToggleBtn.addEventListener('click', () => {
        const currentlyDark = document.documentElement.classList.contains('dark');
        const nextDark = !currentlyDark;
        applyTheme(nextDark);
        try {
          localStorage.setItem('festive_theme', nextDark ? 'dark' : 'light');
        } catch (e) {}
        showToast(nextDark ? 'Modo escuro ativado 🌙' : 'Modo claro ativado ☀️');
      });
    }

    if (window.matchMedia) {
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        try {
          if (!localStorage.getItem('festive_theme')) {
            applyTheme(e.matches);
          }
        } catch (err) {}
      });
    }
  }

  // --- INITIALIZATION ON DOM READY ---
  document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initNavigation();
    initSummerControls();
    initHomeInteractions();
    initWhiteboardToggle();
  });
})();

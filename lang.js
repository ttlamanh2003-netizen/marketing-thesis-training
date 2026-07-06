(function () {
  const DICT = {
    en: {
      langLabel: 'Language',
      english: 'English',
      vietnamese: 'Tiếng Việt',
      home: 'Home',
      flipCards: 'Flip Cards',
      practiceTime: 'Practice Time',
      section: 'Section',
      caseStudy: 'Case Study',
      allSections: 'All sections',
      previous: 'Previous',
      next: 'Next',
      reveal: 'Reveal',
      hide: 'Hide',
      revealAnswer: 'Reveal Answer',
      hideAnswer: 'Hide Answer',
      shuffle: 'Shuffle',
      shuffleAll: 'Shuffle All',
      sectionOrder: 'Section Order',
      learnWithLa: 'Learn with La',
      brandTagline: 'Marketing English • thesis training • speaking practice',

      homeEyebrow: 'Student learning hub',
      homeTitle: 'Choose your learning mode.',
      homeSubtitle: 'A simple space to review marketing terms, study by section, practice simple sentences, and think through real campaign case studies before thesis presentation time.',
      homeVocabDesc: 'Review 999 marketing keywords with Vietnamese support and simple English definitions.',
      homePracticeDesc: 'Practice 2,000 simple sentences by section, or shuffle all sentences for quick review.',
      homeSectionDesc: 'Study all vocab by topic in table format, with speaker buttons, US IPA, Vietnamese, and simple English explanations.',
      homeCaseDesc: 'Read campaign examples and practice marketing thinking through real brand stories.',

      vocabHeader: 'Flip Cards',
      vocabHeaderSub: 'US IPA + click-to-speak pronunciation.',
      vocabTitle: '999 Marketing Keywords',
      vocabSubtitle: 'Each card includes Vietnamese support, a simple English definition, US IPA phonetics, and a speaker button. The speaker tries to use a female US English voice when the browser/device has one available.',
      vocabSearchPlaceholder: 'Search terms, Vietnamese, definitions, or IPA...',
      vocabSearchAria: 'Search vocabulary',
      filterBySection: 'Filter by section',
      cardsCount: '{current} / {total} cards',
      zeroCards: '0 cards',
      noCards: 'No cards match this filter.',
      clickRevealHint: 'Click the card or press <span class="kbd">Space</span> to reveal the meaning. Click 🔊 to hear the word.',
      clickHideHint: 'Click the card again to hide the meaning.',
      speakWord: 'Speak word',
      speakDefinition: 'Speak definition',
      speechUnsupported: 'Speech is not supported in this browser.',
      voiceLoading: 'Voice loading. Try clicking the speaker once if the first tap is silent.',
      voiceSelected: 'Voice selected: {voice} ({lang}). Female US voice is used when available on this device.',

      practiceHeader: 'Practice Time',
      practiceHeaderSub: 'Guess the missing marketing term.',
      practiceTitle: '2,000 Simple Practice Sentences',
      practiceSubtitle: 'By default, sentences follow the original topic sections. Click <strong>Shuffle All</strong> to mix all sentences in the current filter.',
      practiceSearchPlaceholder: 'Search terms, Vietnamese, definitions, or sentences...',
      practiceSearchAria: 'Search practice sentences',
      sentencesCount: '{current} / {total} sentences',
      zeroSentences: '0 sentences',
      noPractice: 'No practice sentences match this filter.',
      shuffleModeOn: 'Shuffle mode is on: sentences are mixed randomly.',
      sectionOrderOn: 'Section order is on: sentences follow the uploaded practice file by topic.',
      clickBlankTitle: 'Click to reveal answer',
      clue: 'Clue',
      practiceHint: 'Guess the term, then click the blank or press <span class="kbd">Space</span> to reveal the answer.',

      sectionHeader: 'Section',
      sectionHeaderSub: 'Table view by topic • speaker • US IPA',
      sectionTitle: 'Choose a section to study.',
      sectionSubtitle: 'Each section opens as a table. The left column shows the keyword, speaker button, and US IPA. The right column shows the Vietnamese meaning and simple English explanation.',
      sectionSearchPlaceholder: 'Search sections, words, Vietnamese, definitions, or IPA...',
      sectionSearchAria: 'Search sections and vocabulary',
      sectionCount: '{words} words • {sections} sections',
      words: 'words',
      wordsShown: '{shown} words shown',
      wordsShownFrom: '{shown} words shown from {total} total words in this section',
      noSections: 'No sections match this search.',
      noWordsInSection: 'No words match this search inside Section {section}.',
      keywordSpeakerIpa: 'Keyword + Speaker + US IPA',
      meaningDefinition: 'Vietnamese Meaning + Simple English Explanation',
      pdfPrint: '⬇ PDF Print',
      pdfAria: 'Download PDF print for Section {section}',
      backToContents: 'Back to contents',
      pdfModalTitle: 'Download a PDF print?',
      pdfModalText: 'Your browser will open the print dialog. Choose <strong>Save as PDF</strong> to download this section table.',
      cancel: 'Cancel',
      printSavePdf: 'Print / Save PDF',
      closePdfDialog: 'Close PDF download dialog',

      caseHeaderSub: 'Marketing English • Case studies • Critical thinking',
      caseLibrary: 'Case Study Library',
      caseTitle: 'Marketing campaigns worth discussing.',
      caseSubtitle: 'Use these short case studies to practice Marketing English, explain campaign logic, and answer professor-style questions with clearer reasoning.',
      caseNote: 'Speaking tip: for each case, answer the practice questions using PREP: Point → Reason → Example → Point.',
      tableOfContents: 'Table of contents',
      chooseSectionEmpty: 'Choose a section above to open its table.',
      whatHappened: 'What happened?',
      whyWorked: 'Why it worked',
      visualAppearance: 'Visual appearance',
      practiceQuestions: 'Practice questions',
      backToTable: 'Back to table of contents',
      q1: 'What problem or opportunity did the brand notice?',
      q2: 'What made this campaign easy to remember or share?',
      q3: 'What lesson could you apply to a thesis marketing plan?'
    },
    vi: {
      langLabel: 'Ngôn ngữ',
      english: 'Tiếng Anh',
      vietnamese: 'Tiếng Việt',
      home: 'Trang chủ',
      flipCards: 'Thẻ từ vựng',
      practiceTime: 'Luyện câu',
      section: 'Chủ đề',
      caseStudy: 'Tình huống',
      allSections: 'Tất cả chủ đề',
      previous: 'Trước',
      next: 'Tiếp theo',
      reveal: 'Hiện nghĩa',
      hide: 'Ẩn nghĩa',
      revealAnswer: 'Hiện đáp án',
      hideAnswer: 'Ẩn đáp án',
      shuffle: 'Trộn ngẫu nhiên',
      shuffleAll: 'Trộn tất cả',
      sectionOrder: 'Theo thứ tự chủ đề',
      learnWithLa: 'Learn with La',
      brandTagline: 'Tiếng Anh Marketing • luyện bảo vệ khóa luận • luyện nói',

      homeEyebrow: 'Không gian học tập',
      homeTitle: 'Chọn phần học của bạn.',
      homeSubtitle: 'Một không gian đơn giản để ôn thuật ngữ marketing, học theo chủ đề, luyện câu ngắn và phân tích các case study chiến dịch trước khi thuyết trình khóa luận.',
      homeVocabDesc: 'Ôn 999 từ khóa marketing với hỗ trợ tiếng Việt và định nghĩa tiếng Anh đơn giản.',
      homePracticeDesc: 'Luyện 2.000 câu tiếng Anh đơn giản theo chủ đề, hoặc trộn câu để ôn nhanh.',
      homeSectionDesc: 'Học toàn bộ từ vựng theo bảng chủ đề, có nút nghe, phiên âm US IPA, tiếng Việt và giải thích tiếng Anh đơn giản.',
      homeCaseDesc: 'Đọc ví dụ chiến dịch và luyện tư duy marketing qua câu chuyện của các thương hiệu thật.',

      vocabHeader: 'Thẻ từ vựng',
      vocabHeaderSub: 'Phiên âm US IPA + bấm để nghe phát âm.',
      vocabTitle: '999 Từ khóa Marketing',
      vocabSubtitle: 'Mỗi thẻ có hỗ trợ tiếng Việt, định nghĩa tiếng Anh đơn giản, phiên âm US IPA và nút nghe. Giọng đọc sẽ ưu tiên giọng nữ Anh-Mỹ nếu trình duyệt hoặc thiết bị có hỗ trợ.',
      vocabSearchPlaceholder: 'Tìm từ, nghĩa tiếng Việt, định nghĩa hoặc IPA...',
      vocabSearchAria: 'Tìm từ vựng',
      filterBySection: 'Lọc theo chủ đề',
      cardsCount: '{current} / {total} thẻ',
      zeroCards: '0 thẻ',
      noCards: 'Không có thẻ nào khớp với bộ lọc.',
      clickRevealHint: 'Bấm vào thẻ hoặc nhấn <span class="kbd">Space</span> để hiện nghĩa. Bấm 🔊 để nghe từ.',
      clickHideHint: 'Bấm vào thẻ lần nữa để ẩn nghĩa.',
      speakWord: 'Nghe từ',
      speakDefinition: 'Nghe định nghĩa',
      speechUnsupported: 'Trình duyệt này không hỗ trợ đọc giọng nói.',
      voiceLoading: 'Đang tải giọng đọc. Nếu lần đầu chưa nghe được, hãy bấm nút loa một lần nữa.',
      voiceSelected: 'Giọng đọc đang dùng: {voice} ({lang}). Hệ thống sẽ ưu tiên giọng nữ Anh-Mỹ nếu thiết bị có hỗ trợ.',

      practiceHeader: 'Luyện câu',
      practiceHeaderSub: 'Đoán thuật ngữ marketing còn thiếu.',
      practiceTitle: '2.000 Câu luyện tập đơn giản',
      practiceSubtitle: 'Mặc định, câu luyện tập sẽ đi theo thứ tự chủ đề gốc. Bấm <strong>Trộn tất cả</strong> để xáo trộn các câu trong bộ lọc hiện tại.',
      practiceSearchPlaceholder: 'Tìm từ, nghĩa tiếng Việt, định nghĩa hoặc câu luyện tập...',
      practiceSearchAria: 'Tìm câu luyện tập',
      sentencesCount: '{current} / {total} câu',
      zeroSentences: '0 câu',
      noPractice: 'Không có câu luyện tập nào khớp với bộ lọc.',
      shuffleModeOn: 'Chế độ trộn đang bật: các câu được xáo trộn ngẫu nhiên.',
      sectionOrderOn: 'Chế độ theo chủ đề đang bật: câu đi theo thứ tự trong file luyện tập.',
      clickBlankTitle: 'Bấm để hiện đáp án',
      clue: 'Gợi ý',
      practiceHint: 'Đoán thuật ngữ, sau đó bấm vào ô trống hoặc nhấn <span class="kbd">Space</span> để hiện đáp án.',

      sectionHeader: 'Chủ đề',
      sectionHeaderSub: 'Bảng từ theo chủ đề • nút nghe • US IPA',
      sectionTitle: 'Chọn một chủ đề để học.',
      sectionSubtitle: 'Mỗi chủ đề sẽ mở dưới dạng bảng. Cột trái có từ khóa, nút nghe và phiên âm US IPA. Cột phải có nghĩa tiếng Việt và giải thích tiếng Anh đơn giản.',
      sectionSearchPlaceholder: 'Tìm chủ đề, từ, nghĩa tiếng Việt, định nghĩa hoặc IPA...',
      sectionSearchAria: 'Tìm chủ đề và từ vựng',
      sectionCount: '{words} từ • {sections} chủ đề',
      words: 'từ',
      wordsShown: 'Đang hiện {shown} từ',
      wordsShownFrom: 'Đang hiện {shown} từ trong tổng số {total} từ của chủ đề này',
      noSections: 'Không có chủ đề nào khớp với tìm kiếm.',
      noWordsInSection: 'Không có từ nào khớp với tìm kiếm trong Chủ đề {section}.',
      keywordSpeakerIpa: 'Từ khóa + Nút nghe + US IPA',
      meaningDefinition: 'Nghĩa tiếng Việt + Giải thích tiếng Anh đơn giản',
      pdfPrint: '⬇ In PDF',
      pdfAria: 'Tải bản in PDF cho Chủ đề {section}',
      backToContents: 'Quay lại mục lục',
      pdfModalTitle: 'Tải bản in PDF?',
      pdfModalText: 'Trình duyệt sẽ mở cửa sổ in. Chọn <strong>Save as PDF</strong> để tải bảng của chủ đề này.',
      cancel: 'Hủy',
      printSavePdf: 'In / Lưu PDF',
      closePdfDialog: 'Đóng hộp thoại tải PDF',

      caseHeaderSub: 'Tiếng Anh Marketing • Case study • Tư duy phản biện',
      caseLibrary: 'Thư viện Case Study',
      caseTitle: 'Những chiến dịch marketing đáng thảo luận.',
      caseSubtitle: 'Dùng các case study ngắn này để luyện tiếng Anh Marketing, giải thích logic chiến dịch và trả lời câu hỏi kiểu hội đồng rõ ràng hơn.',
      caseNote: 'Mẹo luyện nói: với mỗi case, hãy trả lời câu hỏi theo PREP: Point → Reason → Example → Point.',
      tableOfContents: 'Mục lục',
      chooseSectionEmpty: 'Chọn một chủ đề ở trên để mở bảng từ vựng.',
      whatHappened: 'Điều gì đã xảy ra?',
      whyWorked: 'Vì sao hiệu quả?',
      visualAppearance: 'Hình ảnh chiến dịch',
      practiceQuestions: 'Câu hỏi luyện tập',
      backToTable: 'Quay lại mục lục',
      q1: 'Thương hiệu đã nhìn thấy vấn đề hoặc cơ hội nào?',
      q2: 'Điều gì khiến chiến dịch này dễ nhớ hoặc dễ được chia sẻ?',
      q3: 'Bài học nào có thể áp dụng vào kế hoạch marketing trong khóa luận?'
    }
  };

  function format(template, vars) {
    return String(template || '').replace(/\{(\w+)\}/g, (_, key) => (vars && vars[key] !== undefined ? vars[key] : ''));
  }
  function getLang() {
    return localStorage.getItem('learnWithLaLang') || 'en';
  }
  function setLang(lang) {
    const safeLang = lang === 'vi' ? 'vi' : 'en';
    localStorage.setItem('learnWithLaLang', safeLang);
    applyLang();
    window.dispatchEvent(new CustomEvent('languagechange', { detail: { lang: safeLang } }));
  }
  function t(key, vars) {
    const lang = getLang();
    return format((DICT[lang] && DICT[lang][key]) || DICT.en[key] || key, vars);
  }
  function applyAttributes(el) {
    const attrSpec = el.getAttribute('data-i18n-attr');
    if (!attrSpec) return;
    attrSpec.split(';').map(x => x.trim()).filter(Boolean).forEach(pair => {
      const [attr, key] = pair.split(':').map(x => x.trim());
      if (attr && key) el.setAttribute(attr, t(key));
    });
  }
  function translateCasePage() {
    document.querySelectorAll('.case-kicker').forEach(el => {
      const num = (el.textContent.match(/\d+/) || [''])[0];
      if (num) el.textContent = `${t('caseStudy')} ${num}`;
    });
    document.querySelectorAll('.case-content h3').forEach(el => {
      const raw = el.textContent.trim().toLowerCase();
      if (['what happened?', 'điều gì đã xảy ra?'].includes(raw)) el.textContent = t('whatHappened');
      if (['why it worked', 'vì sao hiệu quả?'].includes(raw)) el.textContent = t('whyWorked');
      if (['visual appearance', 'hình ảnh chiến dịch'].includes(raw)) el.textContent = t('visualAppearance');
      if (['practice questions', 'câu hỏi luyện tập'].includes(raw)) el.textContent = t('practiceQuestions');
    });
    document.querySelectorAll('.back-top').forEach(el => { el.textContent = t('backToTable'); });
    document.querySelectorAll('.questions ol').forEach(ol => {
      const lis = ol.querySelectorAll('li');
      if (lis[0]) lis[0].textContent = t('q1');
      if (lis[1]) lis[1].textContent = t('q2');
      if (lis[2]) lis[2].textContent = t('q3');
    });
  }
  function applyLang() {
    const lang = getLang();
    document.documentElement.lang = lang === 'vi' ? 'vi' : 'en';
    document.querySelectorAll('[data-i18n]').forEach(el => { el.innerHTML = t(el.getAttribute('data-i18n')); });
    document.querySelectorAll('[data-i18n-attr]').forEach(applyAttributes);
    document.querySelectorAll('[data-set-lang]').forEach(btn => {
      const active = btn.getAttribute('data-set-lang') === lang;
      btn.classList.toggle('active', active);
      btn.setAttribute('aria-pressed', active ? 'true' : 'false');
    });
    translateCasePage();
  }
  function init() {
    document.querySelectorAll('[data-set-lang]').forEach(btn => {
      btn.addEventListener('click', () => setLang(btn.getAttribute('data-set-lang')));
    });
    applyLang();
  }
  window.LaLang = { t, getLang, setLang, applyLang, init };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();

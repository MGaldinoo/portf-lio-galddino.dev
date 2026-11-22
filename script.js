// Wait for the HTML document to be ready before using its elements.
// Aguarda o HTML estar pronto antes de acessar seus elementos.

(function () {
  "use strict";

  // Check whether the visitor prefers reduced motion.
  // Verifica se a pessoa prefere menos animações.
  var prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // --------------------------------------------------
  // Background particle wave / Onda de partículas do fundo
  // --------------------------------------------------

  var canvas = document.getElementById("wave");
  var context = canvas.getContext("2d");

  var canvasWidth = 0;
  var canvasHeight = 0;
  var animationTime = 1;
  var scale = 1;
  var particleOffsets = [];

  // Create random positions for the particles once.
  // Cria posições aleatórias para as partículas apenas uma vez.
  for (var i = 0; i < 4000; i++) {
    particleOffsets.push(Math.random() * 2 - 1);
  }

  // Update the canvas size when the page loads or the window changes.
  // Atualiza o tamanho do canvas ao carregar a página ou redimensionar a janela.
  function resizeCanvas() {
    var canvasArea = canvas.getBoundingClientRect();
    var pixelRatio = Math.min(window.devicePixelRatio || 1, 2);

    scale = (parseFloat(getComputedStyle(document.documentElement).fontSize) || 16) / 16;
    canvasWidth = canvasArea.width;
    canvasHeight = canvasArea.height;

    canvas.width = canvasWidth * pixelRatio;
    canvas.height = canvasHeight * pixelRatio;
    context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);

    drawWave();
  }

  // Draw the particles that form the wave.
  // Desenha as partículas que formam a onda.
  function drawWave() {
    context.clearRect(0, 0, canvasWidth, canvasHeight);

    var particleIndex = 0;

    for (var x = 0; x < canvasWidth; x += 7 * scale) {
      var position = x / canvasWidth;
      var baseHeight = canvasHeight * 0.6
        + Math.sin((x / scale) * 0.01 + animationTime) * canvasHeight * 0.2
        + Math.sin((x / scale) * 0.026 - animationTime * 1.3) * canvasHeight * 0.07;

      for (var row = 0; row < 13; row++) {
        var offset = particleOffsets[particleIndex % particleOffsets.length];
        var opacity = 0.14 + 0.55 * (1 - Math.abs(offset));

        var red = Math.round(42 - 32 * position);
        var green = Math.round(134 - 119 * position);
        var blue = Math.round(207 - 185 * position);

        context.fillStyle = "rgba(" + red + ", " + green + ", " + blue + ", " + opacity + ")";

        var particleSize = (1 + (1 - Math.abs(offset)) * 1.1) * scale;
        context.fillRect(x, baseHeight + offset * 34 * scale, particleSize, particleSize);

        particleIndex++;
      }
    }
  }

  // Keep the wave moving while motion is allowed.
  // Mantém a onda em movimento quando animações são permitidas.
  function animateWave() {
    animationTime += 0.012;
    drawWave();
    window.requestAnimationFrame(animateWave);
  }

  resizeCanvas();
  window.addEventListener("resize", resizeCanvas);

  if (!prefersReducedMotion) {
    window.requestAnimationFrame(animateWave);
  }

  // --------------------------------------------------
  // Active navigation link / Link ativo do menu
  // --------------------------------------------------

  var navigationLinks = Array.from(document.querySelectorAll(".rail nav a"));

  // Highlight the menu item related to the section currently on screen.
  // Destaca o item do menu relacionado à seção que está na tela.
  var sectionObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        navigationLinks.forEach(function (link) {
          var sectionId = link.getAttribute("href").substring(1);
          link.classList.toggle("on", sectionId === entry.target.id);
        });
      }
    });
  }, {
    rootMargin: "-40% 0px -55% 0px"
  });

  navigationLinks.forEach(function (link) {
    var section = document.getElementById(link.getAttribute("href").substring(1));

    if (section) {
      sectionObserver.observe(section);
    }
  });

  // --------------------------------------------------
  // Debugging example / Exemplo de depuração
  // --------------------------------------------------

  var codeLine = document.getElementById("code-line");
  var message = document.getElementById("message");

  var steps = [
    document.getElementById("s0"),
    document.getElementById("s1"),
    document.getElementById("s2")
  ];

  // The first line contains an assignment (=), which is the bug.
  // A primeira linha contém uma atribuição (=), que é o erro.
  var incorrectCode = '<span class="k">  if</span> (user = <span class="k">null</span>) {';
  var correctCode = '<span class="k">  if</span> (user === <span class="k">null</span>) {';

  var stepMessages = [
    "Identify: the login fails for every user.",
    "Diagnose: the code uses = (assignment) instead of === (comparison).",
    "Fix: the comparison is corrected, the test is repeated, and the issue is solved."
  ];

  // Update the code sample, message and current step.
  // Atualiza o exemplo de código, a mensagem e a etapa atual.
  function showDebugStep(stepIndex) {
    var isFixed = stepIndex === 2;

    codeLine.innerHTML = isFixed ? correctCode : incorrectCode;
    codeLine.className = "ln " + (isFixed ? "good" : "bad");
    message.textContent = stepMessages[stepIndex];

    steps.forEach(function (step, index) {
      step.className = "";

      if (index === stepIndex) {
        step.classList.add("on");
      } else if (index < stepIndex) {
        step.classList.add("ok");
      }
    });
  }

  var currentStep = 0;

  // Show the final state when reduced motion is enabled.
  // Mostra o estado final quando a pessoa prefere menos animações.
  showDebugStep(prefersReducedMotion ? 2 : 0);

  if (!prefersReducedMotion) {
    window.setInterval(function () {
      currentStep = (currentStep + 1) % steps.length;
      showDebugStep(currentStep);
    }, 3200);
  }

  // --------------------------------------------------
  // Reveal elements while scrolling / Exibe elementos durante a rolagem
  // --------------------------------------------------

  var revealObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("vis");
        revealObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1
  });

  document.querySelectorAll(".rv").forEach(function (element) {
    revealObserver.observe(element);
  });
})();

import './style.css'

// Animation observer
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-fade-in');
    }
  });
}, observerOptions);

// Stagger animation observer
const staggerObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const children = entry.target.querySelectorAll('.animate-stagger');
      children.forEach((child, index) => {
        setTimeout(() => {
          child.classList.add('animate-slide-up');
        }, index * 100);
      });
    }
  });
}, observerOptions);

document.querySelector('#app').innerHTML = `
  <main class="min-h-screen bg-primary">
    <!-- Unified Hero Section -->
    <section class="relative overflow-hidden">
      <!-- Text Content Block -->
      <div class="pt-16 lg:pt-24 pb-8 lg:pb-12">
        <div class="container-custom">
          <div class="text-center max-w-4xl mx-auto">
            <h5 class="text-h5-mobile lg:text-h5-desktop text-red-600 mb-12 animate-slide-up animate-fade-in">
            <div class="hero-logo animate-fade-in mb-8">
              <img 
                src="https://ucarecdn.com/935421b6-8b71-4264-9cd5-20f92442ed30/-/preview/292x151/" 
                alt="Logo Clube dos 5%"
                class="logo-image"
              />
            </div>
            
            <!-- Main Title -->
            <h1 class="text-h1-mobile lg:text-h1-desktop font-aeonik font-medium text-white mb-6 animate-slide-up">
              VIVA O QUE<br>
              SÓ OS <span class="text-accent">5%</span> VIVEM
            </h1>
            
            <!-- Subtitle -->
            <p class="text-subtitle-mobile lg:text-subtitle-desktop text-white/90 mb-4 animate-slide-up">
              Um guia completo para despertar uma <strong class="text-accent">Vida Boa, Plena e Próspera</strong>.
            </p>
            <p class="text-body-mobile lg:text-body-desktop text-white/80 mb-12 animate-slide-up">
              Com o direcionamento de <strong class="text-white">Jacob Petry</strong> — Autor best-seller, filósofo, pesquisador em<br>
              comportamento humano e criador do Clube dos 5%.
            </p>
            
            <!-- Video Container -->
            <div class="video-container mb-12 animate-scale-in">
              <img 
                src="https://ucarecdn.com/6b23a700-09e7-46c8-ba0a-0dee3784acb6/clubethumbnail.png" 
                alt="Jacob Petry apresentando o conteúdo"
                class="video-thumbnail"
              >
              <div class="video-overlay">
                <div class="play-button" onclick="playVideo()">
                </div>
              </div>
            </div>
            
            <!-- CTA Button -->
            <div class="text-center mb-8 animate-slide-up">
              <a href="#pricing" class="btn-primary text-lg font-medium">
                QUERO FAZER PARTE DOS 5%
              </a>
            </div>
            
            <!-- Quote -->
            <div class="text-center mb-16 animate-fade-in">
              <p class="text-body-mobile lg:text-body-desktop text-white/70 italic">
                "Entre pela porta estreita dos sábios."
              </p>
            </div>
          </div>
        </div>
      </div>
      
    </section>
    
    <!-- Features Section -->
    <section class="py-16 lg:py-20 bg-primary">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="features-grid-container">
          <!-- Feature 1 -->
          <div class="feature-card animate-stagger">
            <div class="feature-icon">
              <img 
                src="https://ucarecdn.com/38912434-110e-449d-b129-92d148de8e75/mentoriaaovivo.png" 
                alt="Ícone de Mentoria ao Vivo"
                class="w-full h-full object-contain"
              />
            </div>
            <h4 class="text-h4-mobile lg:text-h4-desktop font-aeonik font-medium text-white mb-4">
              Mentoria ao vivo toda semana
            </h4>
            <p class="text-body-mobile text-white/80 leading-relaxed">
              Tenha o direcionamento que você precisa em um encontro intimista, profundo e transformador com Jacob Petry.
            </p>
          </div>

          <!-- Feature 2 -->
          <div class="feature-card animate-stagger">
            <div class="feature-icon">
              <img 
                src="https://ucarecdn.com/b182fd5c-d7dd-4d79-a449-de6a59a98a6b/boxdoclube.png" 
                alt="Ícone do Box do Clube dos 5%"
                class="w-full h-full object-contain"
              />
            </div>
            <h4 class="text-h4-mobile lg:text-h4-desktop font-aeonik font-medium text-white mb-4">
              Receba em casa o Box do<br>
              Clube dos 5%
            </h4>
            <p class="text-body-mobile text-white/80 leading-relaxed">
              São 4 livros best-sellers que deixarão a sua jornada ainda mais poderosa.
            </p>
          </div>

          <!-- Feature 3 -->
          <div class="feature-card animate-stagger">
            <div class="feature-icon">
              <img 
                src="https://ucarecdn.com/9b25f6cc-c03d-4b9c-8e6c-ffb272b0b07e/ciclodeestudos.png" 
                alt="Ícone de Ciclos de Estudos"
                class="w-full h-full object-contain"
              />
            </div>
            <h4 class="text-h4-mobile lg:text-h4-desktop font-aeonik font-medium text-white mb-4">
              Acesso integral aos Ciclos de Estudos
            </h4>
            <p class="text-body-mobile text-white/80 leading-relaxed">
              Até agora são 12 trilhas, com ensinamentos práticos sobre como tornar sua vida mais plena e significativa.
            </p>
          </div>

          <!-- Feature 4 -->
          <div class="feature-card animate-stagger">
            <div class="feature-icon">
              <img 
                src="https://ucarecdn.com/c3aeb844-abd0-418f-97c3-8aae2d178d60/aplicacaopratica.png" 
                alt="Ícone de Guias de Aplicação Prática"
                class="w-full h-full object-contain"
              />
            </div>
            <h4 class="text-h4-mobile lg:text-h4-desktop font-aeonik font-medium text-white mb-4">
              Guias de Aplicação Prática
            </h4>
            <p class="text-body-mobile text-white/80 leading-relaxed">
              Para cada ciclo de estudos, tenha um material prático e extremamente rico que vai te ajudar a sair do teórico e entrar em movimento.
            </p>
          </div>
        </div>
      </div>
    </section>
    
    <!-- White Section with Image -->
    <section class="pt-8 pb-1 lg:pt-12 lg:pb-2 bg-white">
      <div class="container-custom">
        <div class="flex justify-center items-center">
          <img 
            src="https://ucarecdn.com/c7d55c71-efd4-4074-bee2-da7cffd80506/581.png" 
            alt="Imagem ilustrativa"
            class="max-w-full lg:max-w-[70%] h-auto animate-fade-in"
          />
        </div>
      </div>
    </section>
    
    <!-- New Life Section -->
    <section class="py-16 lg:py-24 bg-white">
      <div class="container-custom">
        <div class="text-center mx-auto">
          <!-- Headline -->
          <h2 class="text-h2-mobile lg:text-h2-desktop font-aeonik font-medium text-primary mb-12 animate-slide-up">
            Um guia completo
          </h2>
          
          <!-- Image -->
          <div class="flex justify-center items-center mb-16">
            <img 
              src="https://ucarecdn.com/b607b551-395c-4320-8cdc-f34476f3561f/VIDADENTRODOCLUBE8.png" 
              alt="Vida dentro do Clube dos 5%"
              class="w-4/5 max-w-none h-auto animate-fade-in"
            />
          </div>
          
          <!-- Text Content -->
          <div class="text-center max-w-4xl mx-auto animate-slide-up">
            <h3 class="text-h3-mobile lg:text-h3-desktop font-onest font-normal text-primary mb-6">
              Não é sobre fazer mais. É sobre ter <strong>clareza absoluta</strong>, <strong>despertar da inconsciência</strong> e <strong>eliminar o sofrimento</strong>.
            </h3>
            
            <p class="text-body-mobile lg:text-body-desktop text-primary/80 italic mb-8">
              Você merece viver uma Vida Plena.
            </p>
            
            <!-- CTA Button -->
            <div class="text-center">
              <a href="#pricing" class="btn-primary text-lg font-medium">
                QUERO VIVER UMA VIDA PLENA
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Profile Check Section -->
    <section class="py-24 lg:py-32 bg-primary">
      <div class="container-custom px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-6xl mx-auto">
          <!-- Headline -->
          <h2 class="text-h2-mobile lg:text-h2-desktop font-aeonik font-medium text-white mb-16 animate-slide-up">
            Veja se você se<br>
            encaixa no perfil 5%
          </h2>
          
          <!-- White Box Container -->
          <div class="bg-white p-8 md:p-12 rounded-2xl shadow-strong animate-fade-in">
            <!-- Box Title -->
            <h3 class="text-h3-mobile lg:text-h3-desktop font-aeonik font-medium text-primary mb-8 text-center">
              O Clube dos 5% é para quem:
            </h3>
            
            <!-- Checklist Grid -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 mb-12 text-left">
              <!-- Checklist Item 1 -->
              <div class="flex items-start animate-stagger">
                <div class="flex-shrink-0 mr-3 mt-1">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="10" cy="10" r="10" fill="#22C55E"/>
                    <path d="M6 10L8.5 12.5L14 7" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
                <p class="text-body-mobile lg:text-body-desktop text-primary">
                  Cansou de ser como a maioria e busca conhecimento sobre si mesmo
                </p>
              </div>
              
              <!-- Checklist Item 2 -->
              <div class="flex items-start animate-stagger">
                <div class="flex-shrink-0 mr-3 mt-1">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="10" cy="10" r="10" fill="#22C55E"/>
                    <path d="M6 10L8.5 12.5L14 7" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
                <p class="text-body-mobile lg:text-body-desktop text-primary">
                  Vive andando em círculos e quer dar um jeito na vida
                </p>
              </div>
              
              <!-- Checklist Item 3 -->
              <div class="flex items-start animate-stagger">
                <div class="flex-shrink-0 mr-3 mt-1">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="10" cy="10" r="10" fill="#22C55E"/>
                    <path d="M6 10L8.5 12.5L14 7" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
                <p class="text-body-mobile lg:text-body-desktop text-primary">
                  Sofre com medo, insegurança, mágoas e arrependimentos e quer se libertar
                </p>
              </div>
              
              <!-- Checklist Item 4 -->
              <div class="flex items-start animate-stagger">
                <div class="flex-shrink-0 mr-3 mt-1">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="10" cy="10" r="10" fill="#22C55E"/>
                    <path d="M6 10L8.5 12.5L14 7" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
                <p class="text-body-mobile lg:text-body-desktop text-primary">
                  Sabe que tem capacidade mas não sai do lugar
                </p>
              </div>
              
              <!-- Checklist Item 5 -->
              <div class="flex items-start animate-stagger">
                <div class="flex-shrink-0 mr-3 mt-1">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="10" cy="10" r="10" fill="#22C55E"/>
                    <path d="M6 10L8.5 12.5L14 7" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
                <p class="text-body-mobile lg:text-body-desktop text-primary">
                  Busca um novo sentido de vida
                </p>
              </div>
              
              <!-- Checklist Item 6 -->
              <div class="flex items-start animate-stagger">
                <div class="flex-shrink-0 mr-3 mt-1">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="10" cy="10" r="10" fill="#22C55E"/>
                    <path d="M6 10L8.5 12.5L14 7" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
                <p class="text-body-mobile lg:text-body-desktop text-primary">
                  Quer sair da estagnação e viver seu propósito
                </p>
              </div>
              
              <!-- Checklist Item 7 -->
              <div class="flex items-start animate-stagger">
                <div class="flex-shrink-0 mr-3 mt-1">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="10" cy="10" r="10" fill="#22C55E"/>
                    <path d="M6 10L8.5 12.5L14 7" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
                <p class="text-body-mobile lg:text-body-desktop text-primary">
                  Quer prosperar em todas as áreas da vida
                </p>
              </div>
              
              <!-- Checklist Item 8 -->
              <div class="flex items-start animate-stagger">
                <div class="flex-shrink-0 mr-3 mt-1">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="10" cy="10" r="10" fill="#22C55E"/>
                    <path d="M6 10L8.5 12.5L14 7" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
                <p class="text-body-mobile lg:text-body-desktop text-primary">
                  Sair do Estado de Incompletude e viver no Estado de Presença
                </p>
              </div>
              
              <!-- Checklist Item 9 -->
              <div class="flex items-start animate-stagger">
                <div class="flex-shrink-0 mr-3 mt-1">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="10" cy="10" r="10" fill="#22C55E"/>
                    <path d="M6 10L8.5 12.5L14 7" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
                <p class="text-body-mobile lg:text-body-desktop text-primary">
                  Saber lidar melhor com a dor e a impermanência
                </p>
              </div>
              
              <!-- Checklist Item 10 -->
              <div class="flex items-start animate-stagger">
                <div class="flex-shrink-0 mr-3 mt-1">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="10" cy="10" r="10" fill="#22C55E"/>
                    <path d="M6 10L8.5 12.5L14 7" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
                <p class="text-body-mobile lg:text-body-desktop text-primary">
                  Quer dar um fim na dependência emocional
                </p>
              </div>
              
              <!-- Checklist Item 11 -->
              <div class="flex items-start animate-stagger">
                <div class="flex-shrink-0 mr-3 mt-1">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="10" cy="10" r="10" fill="#22C55E"/>
                    <path d="M6 10L8.5 12.5L14 7" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
                <p class="text-body-mobile lg:text-body-desktop text-primary">
                  Busca clareza absoluta para progredir em paz
                </p>
              </div>
              
              <!-- Checklist Item 12 -->
              <div class="flex items-start animate-stagger">
                <div class="flex-shrink-0 mr-3 mt-1">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="10" cy="10" r="10" fill="#22C55E"/>
                    <path d="M6 10L8.5 12.5L14 7" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
                <p class="text-body-mobile lg:text-body-desktop text-primary">
                  Quer fazer parte dos 5% da humanidade que está desperta
                </p>
              </div>
            </div>
            
            <!-- CTA Button -->
            <div class="text-center animate-slide-up">
              <a href="#pricing" class="btn-primary text-lg font-medium">
                QUERO FAZER PARTE DOS 5%
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Jacob Petry Bio Section -->
    <section class="py-24 lg:py-32 relative min-h-[800px] lg:min-h-[900px] bg-cover bg-center bg-no-repeat" style="background-image: url('https://ucarecdn.com/a7e85afc-ee58-43cf-bb86-5b5ed6874ed0/jacobpetrybio.JPG');">
      <!-- Gradient Overlay -->
      <div class="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"></div>
      
      <div class="container-custom">
        <div class="relative z-10 flex items-center min-h-[800px] lg:min-h-[900px]">
          <div class="max-w-3xl px-4 sm:px-6 lg:px-8">
            <div class="space-y-8 animate-slide-up">
              <!-- Jacob Petry Headline -->
              <h3 class="text-h3-mobile lg:text-h3-desktop font-aeonik font-medium text-white mb-6">
                Jacob Petry
              </h3>
              
              <p class="text-xl lg:text-2xl text-white leading-relaxed">
                É escritor best-seller, pesquisador em comportamento humano e referência em autoconhecimento e expansão da consciência.
              </p>
              
              <p class="text-body-mobile lg:text-body-desktop text-white leading-relaxed text-lg">
                Um dos autores mais lidos do Brasil. Seus livros já venderam mais de 3 milhões de exemplares e foram destaque em veículos como Fantástico, Época, O Globo, Valor Econômico, Jornal da Globo e Revista Veja.
              </p>
              
              <p class="text-body-mobile lg:text-body-desktop text-white leading-relaxed text-lg">
                Autor de títulos como "O Óbvio que Ignoramos", "Poder & Manipulação" e "As 16 Leis do Sucesso" e "Seja Singular", Jacob é criador do Clube dos 5%, programa que já impactou milhares de pessoas com uma abordagem profunda e prática sobre transformação pessoal e mentalidade de abundância.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Problema/Solução Section -->
    <section class="py-16 lg:py-24 bg-white">
      <div class="container-custom px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-4xl mx-auto animate-fade-in">
          <!-- Headline -->
          <h2 class="text-h2-mobile lg:text-h2-desktop font-aeonik font-medium text-primary mb-8 animate-slide-up">
            Você quer mudar, mas…
          </h2>
          
          <!-- Headline -->
          <!-- Content -->
          <div class="space-y-6 text-body-mobile lg:text-body-desktop text-primary leading-relaxed animate-slide-up">
            <p>…toda vez que tenta, algo te puxa para trás.</p>
            
            <p>Não é preguiça. Não é falta de força de vontade.</p>
            
            <p>A essa altura do campeonato você já sabe que coisa é essa: o <span class="text-underline">falso-eu</span>.</p>
            
            <p>Parabéns! Você já aumentou seu nível de percepção.</p>
            
            <p>Você está pronto para a <span class="text-underline">mudança de status</span>.</p>
            
            <p>Mas de nada adianta perceber, sem direcionamento.</p>
            
            <p>Te garanto: sozinho, é muito mais difícil…</p>
            
            <p>O que nós queremos, é oferecer <span class="text-underline">um guia</span>.</p>
            
            <p>Um <span class="text-underline">direcionamento personalizado</span> para cada aspecto da construção de uma vida plena. Uma vida abundante, próspera. Uma vida boa.</p>
            
            <p>E essa vida já está disponível — você <span class="text-underline">ainda</span> não está consciente dela.</p>
            
            <p><span class="text-underline">O próximo passo</span>: mudar de status, ser um 5%.</p>
            
            <p>Você já sabe, adiar essa mudança pode ser extremamente trágico.</p>
            
            <p>O sofrimento não dá trégua. A vida não te espera. O ponteiro das horas não para…</p>
            
            <p><strong>Eu só espero que ao final dessa vida breve, você tenha vivido uma vida boa.</strong></p>
            
            <p>É hora de encerrar o ciclo de estagnação. E começar um ciclo de prosperidade.</p>
            
            <p>Porque você merece viver uma vida boa, uma vida plena, uma vida próspera.</p>
            
            <p><strong>E aqui dentro do Clube 5%, a vida é um presente.</strong></p>
          </div>
          
          <!-- CTA Button -->
          <div class="text-center mt-12 mb-8 animate-slide-up">
            <a href="#pricing" class="btn-primary text-lg font-medium">
              QUERO FAZER PARTE DOS 5%
            </a>
          </div>
          
          <!-- Text below button -->
          <p class="text-body-mobile lg:text-body-desktop text-primary/70 italic animate-slide-up">
            Você merece viver, o que você nasceu para viver.
          </p>
        </div>
      </div>
    </section>
    
    <!-- Testimonials Section -->
    <section class="testimonials-section py-16 lg:py-24 bg-primary">
      <div class="container-custom px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-6xl mx-auto">
          <!-- Headline -->
          <h2 class="text-h2-mobile lg:text-h2-desktop font-aeonik font-medium text-white mb-16 animate-slide-up">
            É absolutamente indescritível o que aconteceu na vida de cada um dos nossos alunos
          </h2>
          
          <!-- Testimonials Cards -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto animate-fade-in mb-16">
            <!-- Testimonial Card 1 -->
            <div class="testimonial-card animate-stagger">
              <img 
                src="https://ucarecdn.com/c9e8d9c4-2dfb-42ff-8c28-1b32c53ae8dc/depoimento1.png" 
                alt="Depoimento 1"
                class="w-full h-auto rounded-lg shadow-medium"
              />
            </div>
            
            <!-- Testimonial Card 2 -->
            <div class="testimonial-card animate-stagger">
              <img 
                src="https://ucarecdn.com/fc5c8a96-cf21-45aa-a198-d6d522070092/depoimento2.png" 
                alt="Depoimento 2"
                class="w-full h-auto rounded-lg shadow-medium"
              />
            </div>
            
            <!-- Testimonial Card 3 -->
            <div class="testimonial-card animate-stagger">
              <img 
                src="https://ucarecdn.com/ce73068e-cacd-4504-b1cb-29231195f90d/depoimento3.png" 
                alt="Depoimento 3"
                class="w-full h-auto rounded-lg shadow-medium"
              />
            </div>
          </div>
        </div>
        
        <!-- Video Testimonials -->
        <!-- Video and Quote Section - Rafael -->
        <div class="py-8 lg:py-12">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-6xl mx-auto">
            <!-- Video Column -->
            <div class="order-2 lg:order-1 animate-fade-in">
              <div class="video-testimonial-container">
                <video 
                  controls 
                  preload="metadata"
                  poster="https://ucarecdn.com/f4044265-c089-43b3-8789-8aba0e660635/Screenshot20250703at101533PM.png"
                  class="w-full h-auto rounded-lg shadow-strong"
                >
                  <source src="https://neecplxfgfdludxo.public.blob.vercel-storage.com/Jacob%20Petry/Clube%20dos%205%25/Depoimentos%20em%20Video/DEPOIMENTO_RAFAEL_WHATS-nopSzSG6e0cH9JEIxd6uISKLYP2WiW.mp4" type="video/mp4">
                  Seu navegador não suporta o elemento de vídeo.
                </video>
              </div>
            </div>
            
            <!-- Quote Column -->
            <div class="order-1 lg:order-2 flex items-center justify-center animate-slide-up">
              <div class="text-center lg:text-left">
                <h3 class="text-h3-mobile lg:text-h3-desktop font-aeonik font-medium text-white leading-tight">
                  "Não é nem transformador,<br>
                  é esclarecedor."
                </h3>
                <p class="text-body-mobile lg:text-body-desktop text-accent mt-6 italic">
                  — Rafael, membro do Clube dos 5%
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Video and Quote Section - Irene -->
        <div class="py-8 lg:py-12">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-6xl mx-auto">
            <!-- Quote Column -->
            <div class="order-1 lg:order-1 flex items-center justify-center animate-slide-up">
              <div class="text-center lg:text-left">
                <h3 class="text-h3-mobile lg:text-h3-desktop font-aeonik font-medium text-white leading-tight">
                  "Você não pode imaginar o bem que isso me faz, em plenos 73 anos de idade."
                </h3>
                <p class="text-body-mobile lg:text-body-desktop text-accent mt-6 italic">
                  — Irene, membro do Clube dos 5%
                </p>
              </div>
            </div>
            
            <!-- Video Column -->
            <div class="order-2 lg:order-2 animate-fade-in">
              <div class="video-testimonial-container">
                <video 
                  controls 
                  preload="metadata"
                  poster="https://ucarecdn.com/e7138f43-1cb1-4694-822b-8bc5478d44e5/Screenshot20250703at101548PM.png"
                  class="w-full h-auto rounded-lg shadow-strong"
                >
                  <source src="https://neecplxfgfdludxo.public.blob.vercel-storage.com/Jacob%20Petry/Clube%20dos%205%25/Depoimentos%20em%20Video/DEPOIMENTO_IRENE_WHATS-VpEcooSZw1Bd7kCnldFExleb1MpfTp.mp4" type="video/mp4">
                  Seu navegador não suporta o elemento de vídeo.
                </video>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Video and Quote Section - Patrícia -->
        <div class="py-8 lg:py-12">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-6xl mx-auto">
            <!-- Video Column -->
            <div class="order-2 lg:order-1 animate-fade-in">
              <div class="video-testimonial-container">
                <video 
                  controls 
                  preload="metadata"
                  poster="https://ucarecdn.com/8fcc2449-8712-428e-83c9-da10b9eeee99/Screenshot20250703at101558PM.png"
                  class="w-full h-auto rounded-lg shadow-strong"
                >
                  <source src="https://neecplxfgfdludxo.public.blob.vercel-storage.com/Jacob%20Petry/Clube%20dos%205%25/Depoimentos%20em%20Video/DEPOIMENTO_PATRICIA_WHATS-Gn77IfIwai5tfQegzrRqz1fwNlcKvm.mp4" type="video/mp4">
                  Seu navegador não suporta o elemento de vídeo.
                </video>
              </div>
            </div>
            
            <!-- Quote Column -->
            <div class="order-1 lg:order-2 flex items-center justify-center animate-slide-up">
              <div class="text-center lg:text-left">
                <h3 class="text-h3-mobile lg:text-h3-desktop font-aeonik font-medium text-white leading-tight">
                  "O Clube dos 5% foi um divisor de águas na minha vida"
                </h3>
                <p class="text-body-mobile lg:text-body-desktop text-accent mt-6 italic">
                  — Patrícia, membro do Clube dos 5%
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Video and Quote Section - Matheus -->
        <div class="py-8 lg:py-12">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-6xl mx-auto">
            <!-- Quote Column -->
            <div class="order-1 lg:order-1 flex items-center justify-center animate-slide-up">
              <div class="text-center lg:text-left">
                <h3 class="text-h3-mobile lg:text-h3-desktop font-aeonik font-medium text-white leading-tight">
                  "Não existe nada igual no mercado hoje."
                </h3>
                <p class="text-body-mobile lg:text-body-desktop text-accent mt-6 italic">
                  — Matheus, membro do Clube dos 5%
                </p>
              </div>
            </div>
            
            <!-- Video Column -->
            <div class="order-2 lg:order-2 animate-fade-in">
              <div class="video-testimonial-container">
                <video 
                  controls 
                  preload="metadata"
                  poster="https://ucarecdn.com/14c13dc1-b63f-4f83-a6db-4218c4d3aa12/Screenshot20250703at101607PM.png"
                  class="w-full h-auto rounded-lg shadow-strong"
                >
                  <source src="https://neecplxfgfdludxo.public.blob.vercel-storage.com/Jacob%20Petry/Clube%20dos%205%25/Depoimentos%20em%20Video/DEPOIMENTO_MATHEUS_WHATS-oJJIeUMK69i3ZdMVr9iuZg7N2YRPUf.mp4" type="video/mp4">
                  Seu navegador não suporta o elemento de vídeo.
                </video>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Video and Quote Section - Hilda -->
        <div class="py-8 lg:py-12">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-6xl mx-auto">
            <!-- Video Column -->
            <div class="order-2 lg:order-1 animate-fade-in">
              <div class="video-testimonial-container">
                <video 
                  controls 
                  preload="metadata"
                  poster="https://ucarecdn.com/9c668b10-f1ee-4fa7-9646-272ac62400a9/Screenshot20250703at101614PM.png"
                  class="w-full h-auto rounded-lg shadow-strong"
                >
                  <source src="https://neecplxfgfdludxo.public.blob.vercel-storage.com/Jacob%20Petry/Clube%20dos%205%25/Depoimentos%20em%20Video/DEPOIMENTO_HILDA_WHATS-2SIkMK1XVffeexFEzmDOFIi1fGpTNX.mp4" type="video/mp4">
                  Seu navegador não suporta o elemento de vídeo.
                </video>
              </div>
            </div>
            
            <!-- Quote Column -->
            <div class="order-1 lg:order-2 flex items-center justify-center animate-slide-up">
              <div class="text-center lg:text-left">
                <h3 class="text-h3-mobile lg:text-h3-desktop font-aeonik font-medium text-white leading-tight">
                  "Eu me achava insuficiente e pequena, agora comecei a me enxergar como eu sou."
                </h3>
                <p class="text-body-mobile lg:text-body-desktop text-accent mt-6 italic">
                  — Hilda, membro do Clube dos 5%
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Video and Quote Section - Eduardo -->
        <div class="py-8 lg:py-12">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-6xl mx-auto">
            <!-- Quote Column -->
            <div class="order-1 lg:order-1 flex items-center justify-center animate-slide-up">
              <div class="text-center lg:text-left">
                <h3 class="text-h3-mobile lg:text-h3-desktop font-aeonik font-medium text-white leading-tight">
                  "Eu vivia dentro de um falso-eu e nem tinha percebido. Depois do Clube dos 5%, é uma evolução constante."
                </h3>
                <p class="text-body-mobile lg:text-body-desktop text-accent mt-6 italic">
                  — Eduardo, membro do Clube dos 5%
                </p>
              </div>
            </div>
            
            <!-- Video Column -->
            <div class="order-2 lg:order-2 animate-fade-in">
              <div class="video-testimonial-container">
                <video 
                  controls 
                  preload="metadata"
                  poster="https://ucarecdn.com/56aef7ae-1827-425c-a3c8-731103d3a472/Screenshot20250703at101621PM.png"
                  class="w-full h-auto rounded-lg shadow-strong"
                >
                  <source src="https://neecplxfgfdludxo.public.blob.vercel-storage.com/Jacob%20Petry/Clube%20dos%205%25/Depoimentos%20em%20Video/DEPOIMENTO_EDUARDO_WHATS-GK5xcrWUtK8j9yrRdchjzZ21tuUSX2.mp4" type="video/mp4">
                  Seu navegador não suporta o elemento de vídeo.
                </video>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Video and Quote Section - Amanda -->
        <div class="py-8 lg:py-12">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-6xl mx-auto">
            <!-- Video Column -->
            <div class="order-2 lg:order-1 animate-fade-in">
              <div class="video-testimonial-container">
                <video 
                  controls 
                  preload="metadata"
                  poster="https://ucarecdn.com/53dcf4ab-cafc-4095-8f06-95d7808c988b/Screenshot20250703at101628PM.png"
                  class="w-full h-auto rounded-lg shadow-strong"
                >
                  <source src="https://neecplxfgfdludxo.public.blob.vercel-storage.com/Jacob%20Petry/Clube%20dos%205%25/Depoimentos%20em%20Video/DEPOIMENTO_AMANDA_WHATS-KqZ1hHxwOAKc7ldOIVYrnoIRHeDFU7.mp4" type="video/mp4">
                  Seu navegador não suporta o elemento de vídeo.
                </video>
              </div>
            </div>
            
            <!-- Quote Column -->
            <div class="order-1 lg:order-2 flex items-center justify-center animate-slide-up">
              <div class="text-center lg:text-left">
                <h3 class="text-h3-mobile lg:text-h3-desktop font-aeonik font-medium text-white leading-tight">
                  "Antes eu vivia presa do medo e frustração. Hoje consigo me centrar no agora. A palavra chave do Clube dos 5% é transformação pessoal."
                </h3>
                <p class="text-body-mobile lg:text-body-desktop text-accent mt-6 italic">
                  — Amanda, membro do Clube dos 5%
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Video and Quote Section - Luerde -->
        <div class="py-8 lg:py-12">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-6xl mx-auto">
            <!-- Quote Column -->
            <div class="order-1 lg:order-1 flex items-center justify-center animate-slide-up">
              <div class="text-center lg:text-left">
                <h3 class="text-h3-mobile lg:text-h3-desktop font-aeonik font-medium text-white leading-tight">
                  "Sem o Clube, eu era uma pessoa frágil."
                </h3>
                <p class="text-body-mobile lg:text-body-desktop text-accent mt-6 italic">
                  — Luerde, membro do Clube dos 5%
                </p>
              </div>
            </div>
            
            <!-- Video Column -->
            <div class="order-2 lg:order-2 animate-fade-in">
              <div class="video-testimonial-container">
                <video 
                  controls 
                  preload="metadata"
                  poster="https://ucarecdn.com/89a7d1c0-c70a-4081-b534-a2c4950dca7c/Screenshot20250703at101638PM.png"
                  class="w-full h-auto rounded-lg shadow-strong"
                >
                  <source src="https://neecplxfgfdludxo.public.blob.vercel-storage.com/Jacob%20Petry/Clube%20dos%205%25/Depoimentos%20em%20Video/DEPOIMENTO_LUERDE_WHATS-WwOpqDFLZEoxzM8s7RCses4OjW3F1o.mp4" type="video/mp4">
                  Seu navegador não suporta o elemento de vídeo.
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Explicação do Produto Section -->
    <section class="py-16 lg:py-24 bg-primary">
      <div class="container-custom px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-4xl mx-auto">
          <!-- Main Headline -->
          <div class="mb-8 animate-slide-up">
            <!-- Logo -->
            <div class="flex justify-center mb-6">
              <img 
                src="https://ucarecdn.com/caa9c1f4-0cd7-4bf8-a2b8-705212f7d2f1/clubedos5porcentologocompleta.png" 
                alt="Logo Clube dos 5%"
                class="h-32 lg:h-40 w-auto"
              />
            </div>
            <!-- Headline Text -->
            <h2 class="text-h2-mobile lg:text-h2-desktop font-aeonik font-medium text-white">
            Um guia completo — e prático<br>
            para o seu desenvolvimento
            </h2>
          </div>
          
          <!-- Subtitle -->
            <p class="text-subtitle-mobile lg:text-subtitle-desktop text-white/90 mb-4 animate-slide-up">
              Um guia completo
            </p>
          
          <!-- Intro Text -->
          <p class="text-body-mobile lg:text-body-desktop text-white mb-12 animate-slide-up">
            Escolha a trilha que você quer seguir:
          </p>
          
          <!-- Cards Carousel -->
          <div class="card-carousel-container mb-16">
            <div class="carousel-track" id="carouselTrack">
              <div class="carousel-card">
                <img src="https://ucarecdn.com/b0ca1467-209c-4475-9c35-e5826c7624c8/1libertacao.png" alt="Libertação" />
              </div>
              <div class="carousel-card">
                <img src="https://ucarecdn.com/43417f1c-5cd3-498f-8a6f-f918ecf58ea7/2linguagensdoamor.png" alt="Linguagens do Amor" />
              </div>
              <div class="carousel-card">
                <img src="https://ucarecdn.com/32425c4d-b5ed-4627-a3db-c82e466c574c/3novarealidade.png" alt="Nova Realidade" />
              </div>
              <div class="carousel-card">
                <img src="https://ucarecdn.com/e4520944-7cb2-4e8a-b8f2-57757636d934/4despertar.png" alt="Despertar" />
              </div>
              <div class="carousel-card">
                <img src="https://ucarecdn.com/f0f974d7-063b-4de3-a10a-855ec45d599c/5ensinamentosdejesus.png" alt="Ensinamentos de Jesus" />
              </div>
              <div class="carousel-card">
                <img src="https://ucarecdn.com/7cdb34cf-b6ab-40be-9ff5-2236d120bb54/6autoconhecimento.png" alt="Autoconhecimento" />
              </div>
              <div class="carousel-card">
                <img src="https://ucarecdn.com/1c541835-57b1-41a6-b0e6-add9ed3c620c/7talento.png" alt="Talento" />
              </div>
              <div class="carousel-card">
                <img src="https://ucarecdn.com/f48b667b-593b-47fc-9614-78ce289a32c8/8estadodepresenca.png" alt="Estado de Presença" />
              </div>
              <div class="carousel-card">
                <img src="https://ucarecdn.com/b912ad1a-c2b6-4ea3-aefc-a19ac09ac9d1/9aceitacao.png" alt="Aceitação" />
              </div>
              <div class="carousel-card">
                <img src="https://ucarecdn.com/24be6b6b-8fbe-4224-977e-ed60e19d865b/10criacaoconsciente.png" alt="Criação Consciente" />
              </div>
              <div class="carousel-card">
                <img src="https://ucarecdn.com/1ad01aec-ff8e-41fc-8d67-086554b173e6/11propositodevida.png" alt="Propósito de Vida" />
              </div>
              <div class="carousel-card">
                <img src="https://ucarecdn.com/9c261247-30df-42bd-852f-592c6ff32a80/12inteligenciaemocional.png" alt="Inteligência Emocional" />
              </div>
              <div class="carousel-card">
                <img src="https://ucarecdn.com/f6c45ed9-8d25-40bb-9368-d0d811bcd67d/13abase.png" alt="A Base" />
              </div>
            </div>
          </div>
          
          <!-- Trilhas Image -->
          <div class="flex justify-center items-center mb-16 animate-fade-in">
            <img 
              src="https://ucarecdn.com/95eefd1f-612a-4866-89f0-c331f781017f/trilhasblack.png" 
              alt="Trilhas de estudos do Clube dos 5%"
              class="w-full max-w-2xl h-auto"
            />
          </div>
          
          <!-- H4 Heading -->
          <h4 class="text-h4-mobile lg:text-h4-desktop font-aeonik font-medium text-white mb-12 animate-slide-up">
            Não é só mais um curso. Não é só conteúdo.<br>
            É um processo estruturado, cíclico e contínuo.
          </h4>
          
          <!-- H3 Heading -->
          <h3 class="text-h3-mobile lg:text-h3-desktop font-aeonik font-medium text-white mb-6 animate-slide-up">
            Além das 12 trilhas de estudos…
          </h3>
          
          <!-- H5 Heading with emoji -->
          <h5 class="text-h5-mobile lg:text-h5-desktop text-red-600 mb-12 animate-slide-up">
            📍 Você tem um encontro marcado com Jacob Petry,<br>
            toda segunda-feira, às 20h.
          </h5>
          
          <!-- Brilhar Text -->
          <p class="text-body-mobile lg:text-body-desktop text-white mb-8 animate-slide-up">
            Aqui você brilha mais.
          </p>
          
          <!-- CTA Button -->
          <div class="text-center animate-slide-up">
            <a href="#pricing" class="btn-primary text-lg font-medium">
              QUERO BRILHAR MAIS
            </a>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Journey Section -->
    <section class="py-16 lg:py-24 bg-primary">
      <div class="container-custom px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-6xl mx-auto">
          <!-- Headline -->
          <h2 class="text-h2-mobile lg:text-h2-desktop font-aeonik font-medium text-white mb-16 animate-slide-up">
            <span class="hidden lg:inline">Entenda melhor sua jornada<br>dentro do Clube dos 5%</span>
            <span class="lg:hidden">Entenda melhor sua<br>jornada dentro do<br>Clube dos 5%</span>
          </h2>
          
          <!-- Journey Diagram -->
          <div class="journey-diagram animate-fade-in">
            <!-- Phase 1 -->
            <div class="journey-phase-item animate-slide-up">
              <div class="journey-phase-box">
                <h3 class="journey-phase-title">FASE 01:</h3>
                <p class="journey-phase-text">Entender onde você está e para onde você quer ir.</p>
              </div>
              <div class="journey-arrow">→</div>
              <div class="journey-description-box">
                <p>O primeiro passo de toda jornada é saber onde você está e qual é o seu objetivo. Com essa definição, você terá um plano de estudos e de ação.</p>
              </div>
            </div>
            
            <!-- Phase 2 -->
            <div class="journey-phase-item animate-slide-up">
              <div class="journey-phase-box">
                <h3 class="journey-phase-title">FASE 02:</h3>
                <p class="journey-phase-text">Perceber com profundidade quais são seus maiores desafios e seu ciclo de estagnação.</p>
              </div>
              <div class="journey-arrow">→</div>
              <div class="journey-description-box">
                <p>Você deu <em>start</em> na sua jornada de descobrimento. Agora, você irá focar naquilo que mais precisa. Nós iremos te ajudar a ter clareza dos seus maiores <strong>gargalos</strong>.</p>
              </div>
            </div>
            
            <!-- Phase 3 -->
            <div class="journey-phase-item animate-slide-up">
              <div class="journey-phase-box">
                <h3 class="journey-phase-title">FASE 03:</h3>
                <p class="journey-phase-text">Despertar das barreiras que te impedem de prosperar — livrar-se do falso-eu.</p>
              </div>
              <div class="journey-arrow">→</div>
              <div class="journey-description-box">
                <p>Você deu passos importantes e sua clareza aumenta em cada passo. Você já consegue sustentar uma postura diferente e seu nível de presença já é de um 5%.</p>
              </div>
            </div>
            
            <!-- Phase 4 -->
            <div class="journey-phase-item animate-slide-up">
              <div class="journey-phase-box">
                <h3 class="journey-phase-title">FASE 04:</h3>
                <p class="journey-phase-text">Viver uma vida plena e verdadeira — manifestar o seu Eu Verdadeiro.</p>
              </div>
              <div class="journey-arrow">→</div>
              <div class="journey-description-box">
                <p>A jornada é eterna, mas aqui dentro você tem clareza absoluta de quem você é. Vive uma vida plena e próspera. É capaz de fazer coisas que nunca imaginou fazer. <strong>Você se tornou um 5%.</strong></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Offer Explanation Section -->
    <section class="py-16 lg:py-24 bg-white">
      <div class="container-custom px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-6xl mx-auto">
          <!-- Main Headline -->
          <h2 class="text-h2-mobile lg:text-h2-desktop font-aeonik font-medium text-primary mb-16 animate-slide-up leading-tight">
            É hora de saber<br>
            tudo o que você vai levar
          </h2>
          
          <!-- Benefits Grid -->
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16 animate-fade-in">
            <!-- Benefit 1 -->
            <div class="benefit-card">
              <div class="benefit-icon">
                <img src="https://ucarecdn.com/362ee62e-230c-4ca7-8e61-951122fbc8c3/1anodeacesso.png" alt="Ícone 1 ano de acesso" class="w-full h-full object-contain">
              </div>
              <h3 class="text-h4-mobile lg:text-h4-desktop font-aeonik font-medium text-white mb-4">
                1 ano de acesso<br>
                integral ao Clube<br>
                dos 5%.
              </h3>
            </div>
            
            <!-- Benefit 2 -->
            <div class="benefit-card">
              <div class="benefit-icon">
                <img src="https://ucarecdn.com/899bbe0f-c169-46b2-9c2e-95c3b20533de/materialcomplementar.png" alt="Ícone material complementar" class="w-full h-full object-contain">
              </div>
              <h3 class="text-h4-mobile lg:text-h4-desktop font-aeonik font-medium text-white mb-4">
                Material<br>
                complementar<br>
                (Workbooks)<br>
                práticos de cada<br>
                série.
              </h3>
            </div>
            
            <!-- Benefit 3 -->
            <div class="benefit-card">
              <div class="benefit-icon">
                <img src="https://ucarecdn.com/75396a16-33b3-4794-a169-569cb42e89c7/suportetecnico.png" alt="Ícone suporte técnico" class="w-full h-full object-contain">
              </div>
              <h3 class="text-h4-mobile lg:text-h4-desktop font-aeonik font-medium text-white mb-4">
                Acompanhamento<br>
                e suporte técnico.
              </h3>
            </div>
            
            <!-- Benefit 4 -->
            <div class="benefit-card">
              <div class="benefit-icon">
                <img src="https://ucarecdn.com/605e2cb0-2af7-4ea4-ac2d-e48db1aa2402/12ciclosdeestudo.png" alt="Ícone 12 ciclos de estudo" class="w-full h-full object-contain">
              </div>
              <h3 class="text-h4-mobile lg:text-h4-desktop font-aeonik font-medium text-white mb-4">
                12 ciclos de estudos<br>
                prontos para você<br>
                devorar e acelerar<br>
                o seu processo de<br>
                autoconhecimento.
              </h3>
            </div>
          </div>
          
          <!-- Box Section -->
          <div class="mb-16 animate-slide-up">
            <h3 class="text-h3-mobile lg:text-h3-desktop font-aeonik font-medium text-primary mb-8">
              Veja o presente que você vai<br>
              receber em casa — e que você não vai<br>
              encontrar em nenhum outro lugar
            </h3>
            
            <!-- Box Image -->
            <div class="flex justify-center mb-8">
              <img 
                src="https://ucarecdn.com/b219df54-b978-4a15-8c4e-0fd55d6b3aa1/boxclube.PNG" 
                alt="Box do Clube dos 5% - Livros Best Seller de Jacob Petry"
                class="w-full max-w-md h-auto animate-scale-in animate-fade-in"
              />
            </div>
          </div>
          
          <!-- Books Grid -->
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 animate-fade-in">
            <!-- Book 1 -->
            <div class="bg-white border border-gray-200 rounded p-6 transition-all duration-300 hover:border-accent">
              <img src="https://ucarecdn.com/d9ceb922-7219-4166-a1ec-149f8a60b2bd/oobvioqueignoramos.PNG" alt="Capa do livro O óbvio que ignoramos" class="w-full h-auto rounded-lg mb-4 book-cover-img">
              <h4 class="text-h5-mobile lg:text-h5-desktop font-aeonik font-medium text-primary mb-3 text-center">
                O óbvio de<br>
                ignoramos
              </h4>
              <p class="text-body-mobile text-primary/80 leading-relaxed text-sm">
                Um convite para enxergar o que sempre esteve diante de você. Jacob revela por que algumas pessoas conseguem prosperar, enquanto outras ficam presas nos mesmos ciclos — tudo com base em padrões mentais invisíveis que regem nossas decisões.
              </p>
            </div>
            
            <!-- Book 2 -->
            <div class="bg-white border border-gray-200 rounded p-6 transition-all duration-300 hover:border-accent">
              <img src="https://ucarecdn.com/9d5cc392-e858-4f7e-a55b-b3b0578a3a80/poderemanipulacao.PNG" alt="Capa do livro Poder e Manipulação" class="w-full h-auto rounded-lg mb-4 book-cover-img">
              <h4 class="text-h5-mobile lg:text-h5-desktop font-aeonik font-medium text-primary mb-3 text-center">
                Poder e<br>
                Manipulação
              </h4>
              <p class="text-body-mobile text-primary/80 leading-relaxed text-sm">
                Um mergulho corajoso nos bastidores do comportamento humano. Com base em ciência, história e psicologia, o autor desvenda os mecanismos de influência e mostra como reconhecer — e usar — o poder de forma consciente.
              </p>
            </div>
            
            <!-- Book 3 -->
            <div class="bg-white border border-gray-200 rounded p-6 transition-all duration-300 hover:border-accent">
              <img src="https://ucarecdn.com/9b1834ce-b9ff-44a7-b158-df26e3bdf218/as16leisdosucesso.PNG" alt="Capa do livro As 16 leis do sucesso" class="w-full h-auto rounded-lg mb-4 book-cover-img">
              <h4 class="text-h5-mobile lg:text-h5-desktop font-aeonik font-medium text-primary mb-3 text-center">
                As 16 leis do<br>
                sucesso
              </h4>
              <p class="text-body-mobile text-primary/80 leading-relaxed text-sm">
                A obra clássica de Napoleon Hill, reorganizada e traduzida para o mundo de hoje. Jacob reconstrói os princípios que moldaram os maiores nomes da história e entrega um guia direto e moderno para quem quer realizar em alto nível.
              </p>
            </div>
            
            <!-- Book 4 -->
            <div class="bg-white border border-gray-200 rounded p-6 transition-all duration-300 hover:border-accent">
              <img src="https://ucarecdn.com/dcb33644-5cba-4628-b589-9926cd56eb39/sejasingular.PNG" alt="Capa do livro Seja Singular" class="w-full h-auto rounded-lg mb-4 book-cover-img">
              <h4 class="text-h5-mobile lg:text-h5-desktop font-aeonik font-medium text-primary mb-3 text-center">
                Seja Singular: as incríveis vantagens de ser diferente
              </h4>
              <p class="text-body-mobile text-primary/80 leading-relaxed text-sm">
                Em um mundo que premia a repetição, ser você mesmo é um ato revolucionário. Neste livro, Jacob defende a originalidade como caminho para o sucesso, mostrando como descobrir e sustentar sua autenticidade em meio ao caos externo.
              </p>
            </div>
          </div>
          
          <!-- CTA Button -->
          <div class="text-center mt-16 animate-slide-up">
            <a href="#pricing" class="btn-primary text-lg font-medium">
              QUERO FAZER PARTE DOS 5%
            </a>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Pricing Section -->
    <section id="pricing" class="py-16 bg-white">
      <div class="container-custom">
        <div class="max-w-4xl mx-auto">
          <!-- Recapitular -->
          <div class="text-center mb-12">
            <h2 class="text-h2-mobile md:text-h2-desktop font-aeonik font-medium text-primary mb-8">
              Vamos recapitular...
            </h2>
            
            <div class="bg-gray-100 border-2 border-gray-300 rounded-lg p-8 mb-12">
              <div class="space-y-6 text-left">
                <div class="flex items-start gap-4">
                  <div class="w-6 h-6 border-2 border-primary rounded flex items-center justify-center mt-1 flex-shrink-0">
                    <svg class="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                    </svg>
                  </div>
                  <div class="flex-1">
                    <span class="text-lg text-primary font-medium">
                      Acesso ao Clube dos 5% por 12 meses - 
                      <span class="line-through text-gray-500">R$2.997</span>
                    </span>
                  </div>
                </div>
                
                <div class="flex items-start gap-4">
                  <div class="w-6 h-6 border-2 border-primary rounded flex items-center justify-center mt-1 flex-shrink-0">
                    <svg class="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                    </svg>
                  </div>
                  <div class="flex-1">
                    <span class="text-lg text-primary font-medium">
                      12 Ciclos de Estudos Completos com Guias de Aplicação Prática - 
                      <span class="line-through text-gray-500">12x R$997</span>
                    </span>
                  </div>
                </div>
                
                <div class="flex items-start gap-4">
                  <div class="w-6 h-6 border-2 border-primary rounded flex items-center justify-center mt-1 flex-shrink-0">
                    <svg class="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                    </svg>
                  </div>
                  <div class="flex-1">
                    <span class="text-lg text-primary font-medium">
                      Box de Livros Best-Seller de Jacob Petry - 
                      <span class="line-through text-gray-500">R$149,00</span>
                    </span>
                  </div>
                </div>
                
                <div class="flex items-start gap-4">
                  <div class="w-6 h-6 border-2 border-primary rounded flex items-center justify-center mt-1 flex-shrink-0">
                    <svg class="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                    </svg>
                  </div>
                  <div class="flex-1">
                    <span class="text-lg text-primary font-medium">
                      Mentoria A Base: um estudo e análise do livro: 7 hábitos das pessoas altamente eficazes com apostila complementar (+200 páginas) - 
                      <span class="line-through text-gray-500">R$2.497</span>
                    </span>
                  </div>
                </div>
                
                <div class="flex items-start gap-4">
                  <div class="w-6 h-6 border-2 border-primary rounded flex items-center justify-center mt-1 flex-shrink-0">
                    <svg class="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                    </svg>
                  </div>
                  <div class="flex-1">
                    <span class="text-lg text-primary font-medium">
                      Encontro semanal AO VIVO com Jacob Petry. (Incalculável)
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Oferta Final -->
          <div class="text-center mb-12">
            <h2 class="text-h2-mobile md:text-h2-desktop font-aeonik font-medium text-primary mb-12">
              Essa oferta vai acabar!
            </h2>
            
            <!-- Premium Pricing Card -->
            <div class="max-w-md mx-auto">
              <!-- Main Card -->
              <div class="bg-primary border-2 border-accent rounded p-8">
                <!-- Popular Badge -->
                <div class="text-center mb-4">
                  <div class="bg-accent text-primary px-6 py-2 rounded text-sm font-bold inline-block">
                    OFERTA LIMITADA
                  </div>
                </div>
                
                <!-- Card Header -->
                <div class="text-center mb-6">
                  <h3 class="text-2xl md:text-3xl font-aeonik font-bold text-white mb-2">
                    Seja membro do
                  </h3>
                  <h3 class="text-3xl md:text-4xl font-aeonik font-bold text-accent mb-4">
                    Clube dos 5%
                  </h3>
                  <p class="text-lg text-white/70">por apenas:</p>
                </div>
                
                <!-- Pricing Display -->
                <div class="text-center mb-8">
                  <!-- Monthly Price -->
                  <div class="p-6 mb-4 text-white">
                    <p class="text-xl mb-3">12x de</p>
                    <div class="flex items-center justify-center gap-2">
                      <span class="text-4xl">R$</span>
                      <span class="text-7xl md:text-8xl font-bold">194</span>
                      <div class="text-left">
                        <span class="text-4xl">,56</span>
                        <p class="text-base opacity-90">no plano anual</p>
                      </div>
                    </div>
                  </div>
                  
                  <!-- Divider -->
                  <div class="flex items-center justify-center my-4">
                    <div class="border-t border-accent flex-1"></div>
                    <span class="px-4 text-white/60 font-medium">OU</span>
                    <div class="border-t border-accent flex-1"></div>
                  </div>
                  
                  <!-- Annual Price -->
                  <div class="p-4 text-white relative">
                    <div class="text-accent text-xs font-bold mb-2">
                      ECONOMIZE
                    </div>
                    <p class="text-xl font-bold">R$ 1.997 À VISTA</p>
                    <p class="text-sm opacity-80">Pagamento único</p>
                  </div>
                </div>
                
                <!-- Features List -->
                <div class="mb-8">
                  <div class="space-y-3">
                    <div class="flex items-center gap-3">
                      <div class="w-5 h-5 bg-green rounded-full flex items-center justify-center flex-shrink-0">
                        <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                        </svg>
                      </div>
                      <span class="text-sm text-white font-medium">Acesso por 12 meses completos</span>
                    </div>
                    <div class="flex items-center gap-3">
                      <div class="w-5 h-5 bg-green rounded-full flex items-center justify-center flex-shrink-0">
                        <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                        </svg>
                      </div>
                      <span class="text-sm text-white font-medium">Box com 4 livros best-seller</span>
                    </div>
                    <div class="flex items-center gap-3">
                      <div class="w-5 h-5 bg-green rounded-full flex items-center justify-center flex-shrink-0">
                        <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                        </svg>
                      </div>
                      <span class="text-sm text-white font-medium">Mentoria AO VIVO toda semana</span>
                    </div>
                    <div class="flex items-center gap-3">
                      <div class="w-5 h-5 bg-green rounded-full flex items-center justify-center flex-shrink-0">
                        <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                        </svg>
                      </div>
                      <span class="text-sm text-white font-medium">12 Ciclos de Estudos Completos</span>
                    </div>
                  </div>
                </div>
                
                <!-- CTA Button -->
                <div class="text-center">
                  <a href="https://hotm.art/clube5-pv" target="_blank" class="w-full bg-accent hover:bg-accent/90 text-primary font-bold py-4 px-8 rounded text-lg transform hover:scale-105 transition-all duration-300 inline-block">
                    ENTRAR NO CLUBE DOS 5%
                  </a>
                  
                  <!-- Security badges -->
                  <div class="flex items-center justify-center gap-4 mt-4 text-xs text-white/60">
                    <div class="flex items-center gap-1">
                      <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd"></path>
                      </svg>
                      <span>Pagamento Seguro</span>
                    </div>
                    <div class="flex items-center gap-1">
                      <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                      </svg>
                      <span>Garantia 7 dias</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Final Photo Section -->
    <section class="pt-16 lg:pt-24 bg-white">
      <div class="container-custom">
        <!-- Guarantee Section -->
        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
          <div class="text-center bg-secondary p-8 md:p-12 rounded-2xl">
            <h2 class="text-h2-mobile lg:text-h2-desktop font-aeonik font-medium text-white mb-6 animate-slide-up">
              Garantia de 7 dias
            </h2>
            
            <p class="text-subtitle-mobile lg:text-subtitle-desktop text-white mb-8 animate-slide-up">
              A chance de viver uma vida nova, tem risco zero pra você.
            </p>
            
            <!-- Guarantee Icon -->
            <div class="flex justify-center mb-8 animate-scale-in">
              <img 
                src="https://ucarecdn.com/74c46157-930a-45ee-811a-2621516c92c8/selodegarantia.png" 
                alt="Selo de Garantia 7 dias"
                class="w-40 h-40 object-contain"
              />
            </div>
            
            <p class="text-body-mobile lg:text-body-desktop text-white/80 mb-6 animate-slide-up">
              Teste o Clube por até uma semana. Se, por qualquer motivo, você achar que ele não é pra você, devolvemos 100% do seu investimento.
            </p>
            
            <p class="text-body-mobile lg:text-body-desktop text-white/80 animate-slide-up">
              <strong>Sem perguntas. Sem letras miúdas.</strong><br>
              É só fazer o cancelamento através de um simples botão.
            </p>
          </div>
        </div>
        
        <!-- Support Section -->
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
          <div class="text-center bg-white p-8 md:p-12 rounded-2xl border border-gray-200">
            <h2 class="text-h2-mobile lg:text-h2-desktop font-aeonik font-medium text-primary mb-8 animate-slide-up">
              Tem alguma dúvida?
            </h2>
            <p class="text-body-mobile lg:text-body-desktop text-primary/80 mb-12 animate-slide-up">
              Toque no botão abaixo e fale diretamente com uma pessoa do time de suporte pelo Whatsapp:
            </p>
            
            <!-- WhatsApp CTA Button -->
            <div class="text-center animate-slide-up">
              <a href="https://wa.me/551151920697" target="_blank" style="background-color: #25D366; color: white;" class="inline-flex items-center justify-center gap-3 hover:opacity-90 text-white font-bold py-4 px-8 rounded text-lg transform hover:scale-105 transition-all duration-300">
                <svg class="w-6 h-6 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.506"/>
                </svg>
                <span>TIRAR DÚVIDA PELO WHATSAPP</span>
              </a>
            </div>
          </div>
        </div>
        
        <!-- FAQ Section -->
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <h2 class="text-h2-mobile lg:text-h2-desktop font-aeonik font-medium text-primary text-center mb-12 animate-slide-up">
            FAQ - Perguntas frequentes
          </h2>
          
          <div class="space-y-4 animate-fade-in">
            <!-- FAQ Item 1 -->
            <details class="faq-item">
              <summary class="faq-question">
                O que é o Clube dos 5%?
              </summary>
              <div class="faq-answer">
                <p>O Clube dos 5% é a nossa escola contínua de autoconhecimento e desenvolvimento pessoal – com aulas semanais inéditas, estudos de livros, cursos e séries gravadas e uma grande comunidade de membros!</p>
              </div>
            </details>
            
            <!-- FAQ Item 2 -->
            <details class="faq-item">
              <summary class="faq-question">
                Como funcionam as aulas AO VIVO?
              </summary>
              <div class="faq-answer">
                <p>As aulas AO VIVO do Clube são sempre às segundas-feiras, às 20h. (Horário de Brasília). Cada aula possui uma duração média de 1h30 minutos.</p>
                <p>Elas são transmitidas ao vivo na sala de aula da plataforma e depois ficam arquivadas e à disposição para serem assistidas ou revistas sempre que os membros desejarem.</p>
                <p>Os avisos das aulas são enviados por e-mail, grupos e pela plataforma.</p>
              </div>
            </details>
            
            <!-- FAQ Item 3 -->
            <details class="faq-item">
              <summary class="faq-question">
                Como vou receber acesso ao produto?
              </summary>
              <div class="faq-answer">
                <p>Assim que a sua assinatura for confirmada, você receberá um e-mail com o seu login e senha para acesso à nossa plataforma.</p>
              </div>
            </details>
            
            <!-- FAQ Item 4 -->
            <details class="faq-item">
              <summary class="faq-question">
                Por quanto tempo terei acesso?
              </summary>
              <div class="faq-answer">
                <p>O Clube dos 5% é uma assinatura anual. Ou seja, ao se inscrever você recebe acesso por 1 ano, e pode renovar de forma anual.</p>
              </div>
            </details>
            
            <!-- FAQ Item 5 -->
            <details class="faq-item">
              <summary class="faq-question">
                Quais as formas de pagamento?
              </summary>
              <div class="faq-answer">
                <p>Trabalhamos com as seguintes formas de pagamento:</p>
                <p>– Cartão de crédito, em até 12x<br>
                – Dois cartões de crédito<br>
                – Pix<br>
                – Conta Hotmart</p>
              </div>
            </details>
            
            <!-- FAQ Item 6 -->
            <details class="faq-item">
              <summary class="faq-question">
                Como solicito reembolso?
              </summary>
              <div class="faq-answer">
                <p>O reembolso pode ser realizado diretamente pela plataforma em até 7 dias após a inscrição. Caso necessário, contate o suporte através do e-mail alunos@jacobpetry.com.br</p>
              </div>
            </details>
          </div>
        </div>
        
        <!-- CTA Button -->
        <div class="text-center mb-16 animate-slide-up">
          <a href="#pricing" class="btn-primary text-lg font-medium">
            QUERO FAZER PARTE DOS 5%
          </a>
        </div>
      </div>
      
      <!-- Responsive Image -->
      <div class="w-full overflow-hidden pb-0 relative">
        <picture>
          <source media="(min-width: 768px)" srcset="https://ucarecdn.com/20b14473-1656-4608-b59b-7559b010e51e/DSC02956.webp">
          <img 
            src="https://ucarecdn.com/85b07f5c-a3c1-4671-96a6-53fcf4eafb07/clubedos5porcentofooter.png" 
            alt="Jacob Petry e membros do Clube dos 5%"
            class="w-full h-auto object-cover animate-fade-in block"
          />
        </picture>
        <!-- Bottom Gradient Overlay -->
        <div class="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black via-black/80 to-transparent pointer-events-none"></div>
      </div>
    </section>
    
    <!-- Footer -->
    <footer class="bg-primary py-12 lg:py-16">
      <div class="container-custom">
        <div class="text-center">
          <!-- Logo -->
          <div class="mb-6">
            <img 
              src="https://ucarecdn.com/935421b6-8b71-4264-9cd5-20f92442ed30/-/preview/292x151/" 
              alt="Logo Clube dos 5%"
              class="w-32 h-auto mx-auto opacity-80"
            />
          </div>
          
          <!-- Copyright -->
          <p class="text-white/60 text-sm">
            © 2024 Clube dos 5%. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  </main>
`

// Initialize animations
document.addEventListener('DOMContentLoaded', () => {
  // Observe all elements with animation classes
  const animatedElements = document.querySelectorAll('.animate-fade-in, .animate-slide-up, .animate-scale-in');
  animatedElements.forEach(el => observer.observe(el));
  
  // Observe features grid for stagger animation
  const featuresGridContainer = document.querySelector('.features-grid-container');
  if (featuresGridContainer) {
    staggerObserver.observe(featuresGridContainer);
  }
  
  // Add initial animation classes
  setTimeout(() => {
    document.querySelectorAll('.animate-slide-up').forEach((el, index) => {
      setTimeout(() => {
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      }, index * 100);
    });
  }, 100);
});

// Play video function
window.playVideo = function() {
  const videoContainer = document.querySelector('.video-container');
  const videoThumbnail = document.querySelector('.video-thumbnail');
  const videoOverlay = document.querySelector('.video-overlay');
  
  // Remove thumbnail and overlay
  if (videoThumbnail) videoThumbnail.remove();
  if (videoOverlay) videoOverlay.remove();
  
  // Create YouTube iframe
  const iframe = document.createElement('iframe');
  iframe.src = 'https://www.youtube.com/embed/4N9gMXwfH1M?autoplay=1';
  iframe.frameBorder = '0';
  iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
  iframe.allowFullscreen = true;
  iframe.style.position = 'absolute';
  iframe.style.top = '0';
  iframe.style.left = '0';
  iframe.style.width = '100%';
  iframe.style.height = '100%';
  
  // Add iframe to container
  videoContainer.appendChild(iframe);
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Cards Carousel Functionality
function initializeCarousel() {
  const carouselTrack = document.getElementById('carouselTrack');
  const carouselContainer = document.querySelector('.card-carousel-container');
  
  if (!carouselTrack || !carouselContainer) return;
  
  // Clone cards for infinite loop
  const originalCards = carouselTrack.innerHTML;
  carouselTrack.innerHTML = originalCards + originalCards; // Duplicate for seamless loop
  
  let isDragging = false;
  let startX = 0;
  let scrollLeft = 0;
  let animationPaused = false;
  
  // Pause animation on hover
  carouselContainer.addEventListener('mouseenter', () => {
    carouselTrack.classList.add('paused');
    animationPaused = true;
  });
  
  // Resume animation on mouse leave
  carouselContainer.addEventListener('mouseleave', () => {
    if (!isDragging) {
      carouselTrack.classList.remove('paused');
      animationPaused = false;
    }
  });
  
  // Mouse drag functionality
  carouselContainer.addEventListener('mousedown', (e) => {
    isDragging = true;
    carouselTrack.classList.add('paused');
    startX = e.pageX - carouselContainer.offsetLeft;
    scrollLeft = carouselContainer.scrollLeft;
    carouselContainer.style.cursor = 'grabbing';
    e.preventDefault();
  });
  
  carouselContainer.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - carouselContainer.offsetLeft;
    const walk = (x - startX) * 2;
    carouselContainer.scrollLeft = scrollLeft - walk;
  });
  
  carouselContainer.addEventListener('mouseup', () => {
    if (isDragging) {
      isDragging = false;
      carouselContainer.style.cursor = 'grab';
      
      // Resume animation after a short delay
      setTimeout(() => {
        if (!animationPaused) {
          carouselTrack.classList.remove('paused');
        }
      }, 1000);
    }
  });
  
  carouselContainer.addEventListener('mouseleave', () => {
    if (isDragging) {
      isDragging = false;
      carouselContainer.style.cursor = 'default';
      
      // Resume animation after a short delay
      setTimeout(() => {
        if (!animationPaused) {
          carouselTrack.classList.remove('paused');
        }
      }, 1000);
    }
  });
  
  // Touch events for mobile
  carouselContainer.addEventListener('touchstart', (e) => {
    isDragging = true;
    carouselTrack.classList.add('paused');
    startX = e.touches[0].pageX - carouselContainer.offsetLeft;
    scrollLeft = carouselContainer.scrollLeft;
  });
  
  carouselContainer.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX - carouselContainer.offsetLeft;
    const walk = (x - startX) * 2;
    carouselContainer.scrollLeft = scrollLeft - walk;
  });
  
  carouselContainer.addEventListener('touchend', () => {
    if (isDragging) {
      isDragging = false;
      
      // Resume animation after a short delay
      setTimeout(() => {
        carouselTrack.classList.remove('paused');
      }, 1000);
    }
  });
}

// Add CSS animations dynamically
const style = document.createElement('style');
style.textContent = `
  .animate-fade-in {
    opacity: 0;
    animation: fadeIn 0.8s ease-out forwards;
  }
  
  .animate-slide-up {
    opacity: 0;
    transform: translateY(30px);
    animation: slideUp 0.6s ease-out forwards;
  }
  
  .animate-scale-in {
    opacity: 0;
    transform: scale(0.95);
    animation: scaleIn 0.5s ease-out forwards;
  }
  
  @keyframes fadeIn {
    to {
      opacity: 1;
    }
  }
  
  @keyframes slideUp {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  @keyframes scaleIn {
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
`;
document.head.appendChild(style);

// Initialize carousel when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  initializeCarousel();
});

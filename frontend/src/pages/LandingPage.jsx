import React from "react";
import { Link } from "react-router-dom";
import { MessageSquare, Shield, Lock, Globe, CheckCircle, ArrowRight } from "lucide-react";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-base-200 font-sans">
      {/* Navigation */}
      <nav className="navbar bg-base-100/80 backdrop-blur-md fixed top-0 z-50 px-4 lg:px-12 border-b border-base-300">
        <div className="flex-1">
          <Link to="/" className="flex items-center gap-2 text-2xl font-bold text-primary">
            <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <MessageSquare className="w-6 h-6 text-primary" />
            </div>
            SummitTalk
          </Link>
        </div>
        <div className="flex-none gap-4">
          <Link to="/login" className="btn btn-ghost">
            Iniciar Sesión
          </Link>
          <Link to="/signup" className="btn btn-primary">
            Comenzar Ahora
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="hero min-h-screen bg-base-200 pt-16">
        <div className="hero-content flex-col lg:flex-row-reverse gap-12 max-w-7xl mx-auto px-4">
          <div className="flex-1 relative">
            {/* Abstract Decorative Elements */}
            <div className="absolute -top-20 -right-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-secondary/20 rounded-full blur-3xl"></div>
            
            <div className="relative bg-base-100 p-6 rounded-2xl shadow-2xl border border-base-300">
              <div className="mockup-browser border border-base-300">
                <div className="mockup-browser-toolbar">
                  <div className="input border border-base-300">https://summittalk.secure</div>
                </div>
                <div className="flex justify-center px-4 py-16 bg-base-200">
                   <div className="chat chat-start w-full">
                      <div className="chat-image avatar">
                        <div className="w-10 rounded-full">
                          <img alt="Tailwind CSS chat bubble component" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                        </div>
                      </div>
                      <div className="chat-header">
                        CEO
                        <time className="text-xs opacity-50 ml-1">12:45</time>
                      </div>
                      <div className="chat-bubble chat-bubble-primary">¿Está el reporte financiero listo? Necesito enviarlo cifrado.</div>
                    </div>
                    <div className="chat chat-end w-full mt-4">
                      <div className="chat-image avatar">
                        <div className="w-10 rounded-full">
                          <img alt="Tailwind CSS chat bubble component" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                        </div>
                      </div>
                      <div className="chat-header">
                        CFO
                        <time className="text-xs opacity-50 ml-1">12:46</time>
                      </div>
                      <div className="chat-bubble chat-bubble-secondary">Sí, enviado a través de SummitTalk. Totalmente seguro. 🔒</div>
                      <div className="chat-footer opacity-50">
                        Entregado
                      </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex-1 text-center lg:text-left z-10">
            <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              Comunicación Corporativa <span className="text-primary">Blindada</span>
            </h1>
            <p className="py-6 text-xl text-base-content/70">
              SummitTalk es la plataforma de mensajería definitiva para empresas que no negocian con la seguridad. Cifrado de extremo a extremo para tus decisiones más críticas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="/signup" className="btn btn-primary btn-lg gap-2">
                Prueba SummitTalk Gratis
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a href="#features" className="btn btn-outline btn-lg">
                Saber Más
              </a>
            </div>
            
            <div className="mt-10 flex items-center justify-center lg:justify-start gap-6 text-sm text-base-content/60">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-success" />
                <span>Cifrado militar</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-success" />
                <span>Sin rastreadores</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section id="features" className="py-24 bg-base-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">¿Por qué elegir SummitTalk?</h2>
            <p className="text-xl text-base-content/70 max-w-2xl mx-auto">
              Diseñado específicamente para entornos corporativos donde la confidencialidad no es opcional.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="card bg-base-200 shadow-xl hover:shadow-2xl transition-all duration-300 border border-base-300">
              <div className="card-body items-center text-center">
                <div className="p-4 bg-primary/10 rounded-full mb-4">
                  <Lock className="w-8 h-8 text-primary" />
                </div>
                <h3 className="card-title text-2xl mb-2">Cifrado de Extremo a Extremo</h3>
                <p>
                  Tus mensajes se cifran en tu dispositivo y solo se descifran en el del receptor. Ni siquiera nosotros podemos leerlos.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="card bg-base-200 shadow-xl hover:shadow-2xl transition-all duration-300 border border-base-300">
              <div className="card-body items-center text-center">
                <div className="p-4 bg-secondary/10 rounded-full mb-4">
                  <Shield className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="card-title text-2xl mb-2">Seguridad Empresarial</h3>
                <p>
                  Control total sobre quién accede a tu red. Autenticación robusta y gestión de identidad para equipos modernos.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="card bg-base-200 shadow-xl hover:shadow-2xl transition-all duration-300 border border-base-300">
              <div className="card-body items-center text-center">
                <div className="p-4 bg-accent/10 rounded-full mb-4">
                  <Globe className="w-8 h-8 text-accent" />
                </div>
                <h3 className="card-title text-2xl mb-2">Conexión Global Rápida</h3>
                <p>
                  Infraestructura optimizada para entregar mensajes en milisegundos, sin importar dónde se encuentre tu equipo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Content / Detailed Info */}
      <section className="py-24 bg-base-200">
        <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1">
             <h2 className="text-3xl font-bold mb-6">La solución de mensajería privada que tu empresa necesita</h2>
             <div className="space-y-4 text-base-content/80">
               <p>
                 En el mundo digital actual, la privacidad de los datos corporativos es más vulnerable que nunca. 
                 <strong>SummitTalk</strong> nace como respuesta a la necesidad de canales seguros para discutir estrategias, 
                 compartir documentos sensibles y coordinar operaciones críticas.
               </p>
               <p>
                 A diferencia de las apps de mensajería convencionales, nuestro modelo de negocio no se basa en tus datos. 
                 Nuestra prioridad es blindar tu comunicación con los estándares criptográficos más altos de la industria.
               </p>
               <ul className="list-disc list-inside mt-4 space-y-2 font-medium">
                 <li>Protección contra fugas de información.</li>
                 <li>Cumplimiento normativo para sectores regulados.</li>
                 <li>Interfaz intuitiva que no requiere curva de aprendizaje.</li>
               </ul>
             </div>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="stats shadow bg-base-100 w-full max-w-sm">
              <div className="stat">
                <div className="stat-figure text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                </div>
                <div className="stat-title">Empresas Seguras</div>
                <div className="stat-value text-primary">100%</div>
                <div className="stat-desc">Compromiso de privacidad</div>
              </div>
              
              <div className="stat">
                <div className="stat-figure text-secondary">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                </div>
                <div className="stat-title">Uptime</div>
                <div className="stat-value text-secondary">99.9%</div>
                <div className="stat-desc">Disponibilidad garantizada</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-content">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Protege las conversaciones de tu empresa hoy</h2>
          <p className="text-xl mb-8 opacity-90">
            Únete a los líderes que priorizan la seguridad. Empieza a usar SummitTalk y experimenta la verdadera privacidad.
          </p>
          <div className="flex justify-center gap-4">
             <Link to="/signup" className="btn btn-lg btn-active bg-white text-primary hover:bg-gray-100 border-none">
               Registrar mi Empresa
             </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer p-10 bg-neutral text-neutral-content">
        <aside>
          <div className="flex items-center gap-2 mb-4">
            <MessageSquare className="w-8 h-8" />
            <span className="text-2xl font-bold">SummitTalk</span>
          </div>
          <p>
            SummitTalk Industries Ltd.<br/>
            Proveyendo seguridad desde 2024.
          </p>
        </aside> 
        <nav>
          <header className="footer-title">Servicios</header> 
          <a className="link link-hover">Branding</a> 
          <a className="link link-hover">Design</a> 
          <a className="link link-hover">Marketing</a> 
          <a className="link link-hover">Advertisement</a>
        </nav> 
        <nav>
          <header className="footer-title">Compañía</header> 
          <a className="link link-hover">Sobre nosotros</a> 
          <a className="link link-hover">Contacto</a> 
          <a className="link link-hover">Trabajos</a> 
          <a className="link link-hover">Prensa</a>
        </nav> 
        <nav>
          <header className="footer-title">Legal</header> 
          <a className="link link-hover">Términos de uso</a> 
          <a className="link link-hover">Política de privacidad</a> 
          <a className="link link-hover">Política de cookies</a>
        </nav>
      </footer>
    </div>
  );
};

export default LandingPage;

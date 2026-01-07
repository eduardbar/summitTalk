import React from "react";
import { MessageSquare, Shield, Lock, CheckCircle } from "lucide-react";

const OgImage = () => {
  return (
    <div
      style={{
        width: "1200px",
        height: "630px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)", // Dark Slate background
        color: "white",
        fontFamily: "Inter, sans-serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Decorative Elements */}
      <div
        style={{
          position: "absolute",
          top: "-100px",
          right: "-100px",
          width: "500px",
          height: "500px",
          background: "rgba(59, 130, 246, 0.15)", // Primary blue transparent
          borderRadius: "50%",
          filter: "blur(80px)",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-50px",
          left: "-50px",
          width: "400px",
          height: "400px",
          background: "rgba(236, 72, 153, 0.1)", // Secondary pink transparent
          borderRadius: "50%",
          filter: "blur(80px)",
        }}
      />

      {/* Grid Pattern Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          zIndex: 1,
        }}
      />

      {/* Main Content Container */}
      <div
        style={{
          zIndex: 10,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "60px",
          padding: "60px",
          background: "rgba(30, 41, 59, 0.7)",
          backdropFilter: "blur(20px)",
          borderRadius: "32px",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
          maxWidth: "1000px",
        }}
      >
        {/* Left Side: Logo & Text */}
        <div style={{ flex: 1 }}>
          <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "24px" }}>
            <div
              style={{
                width: "64px",
                height: "64px",
                background: "rgba(59, 130, 246, 0.2)",
                borderRadius: "16px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <MessageSquare size={36} color="#60a5fa" fill="currentColor" strokeWidth={1.5} />
            </div>
            <h1
              style={{
                fontSize: "48px",
                fontWeight: "800",
                letterSpacing: "-0.02em",
                color: "white",
                margin: 0,
              }}
            >
              SummitTalk
            </h1>
          </div>

          <h2
            style={{
              fontSize: "36px",
              fontWeight: "700",
              lineHeight: "1.2",
              marginBottom: "16px",
              background: "linear-gradient(to right, #60a5fa, #a78bfa)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              marginTop: 0,
            }}
          >
            Comunicación Corporativa Blindada
          </h2>

          <p
            style={{
              fontSize: "20px",
              color: "#94a3b8",
              lineHeight: "1.6",
              marginBottom: "32px",
            }}
          >
            La plataforma de mensajería definitiva para empresas.
            Cifrado de extremo a extremo para tus decisiones más críticas.
          </p>

          <div style={{ display: "flex", gap: "24px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "#e2e8f0" }}>
              <Shield size={24} className="text-blue-400" />
              <span style={{ fontWeight: 500 }}>Seguridad Militar</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "#e2e8f0" }}>
              <Lock size={24} className="text-blue-400" />
              <span style={{ fontWeight: 500 }}>100% Privado</span>
            </div>
          </div>
        </div>

        {/* Right Side: Visual Mockup */}
        <div
          style={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              background: "#1e293b",
              padding: "20px",
              borderRadius: "20px",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              width: "100%",
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2)",
            }}
          >
            {/* Fake Chat Message 1 */}
            <div style={{ display: "flex", marginBottom: "16px", alignItems: "flex-end" }}>
              <div
                style={{
                  width: "32px",
                  height: "32px",
                  borderRadius: "50%",
                  background: "#475569",
                  marginRight: "10px",
                }}
              />
              <div
                style={{
                  background: "#334155",
                  padding: "12px 16px",
                  borderRadius: "16px 16px 16px 0",
                  color: "#e2e8f0",
                  fontSize: "14px",
                }}
              >
                ¿Está el reporte listo?
              </div>
            </div>

            {/* Fake Chat Message 2 */}
            <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: "16px", alignItems: "flex-end" }}>
              <div
                style={{
                  background: "#2563eb",
                  padding: "12px 16px",
                  borderRadius: "16px 16px 0 16px",
                  color: "white",
                  fontSize: "14px",
                }}
              >
                Sí, enviando encriptado... 🔒
              </div>
              <div
                style={{
                  width: "32px",
                  height: "32px",
                  borderRadius: "50%",
                  background: "#3b82f6",
                  marginLeft: "10px",
                }}
              />
            </div>
             {/* Fake Chat Message 3 */}
             <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "flex-end" }}>
              <div
                style={{
                  background: "#2563eb",
                  padding: "12px 16px",
                  borderRadius: "16px 16px 0 16px",
                  color: "white",
                  fontSize: "14px",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px"
                }}
              >
                <div style={{width: '20px', height: '20px', background:'white', borderRadius:'4px', opacity: 0.3}}></div>
                Reporte_Q1.pdf
              </div>
              <div
                style={{
                  width: "32px",
                  height: "32px",
                  borderRadius: "50%",
                  background: "#3b82f6",
                  marginLeft: "10px",
                  opacity: 0
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OgImage;

import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "./components/navbar";
import { Toaster } from "./components/ui/sonner";
import { toast } from "sonner";
import { Button } from "./components/ui/button";
import { Linkedin } from "lucide-react";

function App() {
  const popup = (url: string) => {
    window.open(url, "_blank");
  };
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Toaster />
      {/* 
          max-w-prose set max width to size of curr breakpoint
          mx-auto centers fixed width block horizontally
      */}
      <div className="mx-auto max-w-prose px-4">
        <main className="prose max-w-[43rem]">
          <Navbar />
          <p>
            <small className="text-muted-foreground">
              kyuseo / 규서 - pronounced <i>gyu-suh</i>
            </small>
            <br />
            Hi there, my name is <strong>Sam</strong>. I'm a 25 y/o software
            engineer based in San Francisco. I currently work at{" "}
            <strong
              onClick={() =>
                popup("https://www.astranis.com/commercial-connectivity")
              }
            >
              Astranis
            </strong>{" "}
            building out a{" "}
            <strong>satellite health and telemetry monitoring platform</strong>.
            We launched our{" "}
            <strong
              onClick={() =>
                popup(
                  "https://techcrunch.com/2023/05/24/astranis-novel-approach-to-internet-satellites-is-starting-to-pay-off/",
                )
              }
            >
              first satellite
            </strong>{" "}
            last year and are preparing to launch 4 more this year.
          </p>
          <br></br>
          <p>
            Right now I'm exploring <strong>Vite</strong> and{" "}
            <strong>Fast API</strong> for both work and personal projects.
          </p>
          <h2>Projects</h2>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
            <div className="flex flex-col">
              <a
                onClick={() =>
                  toast("Coming soon!", {
                    description:
                      "I'll post a design doc soon. It will be password protected btw.",
                  })
                }
              >
                limits-monitor
              </a>
              <p className="pt-3 text-[14px] font-light leading-relaxed">
                Mission critical system for monitoring satellite health and
                telemetry at Astranis.
              </p>
            </div>
            <div className="flex flex-col">
              <a
                onClick={() =>
                  toast("Coming soon!", {
                    description:
                      "I'll post a design doc soon. It will be password protected btw.",
                  })
                }
              >
                k8s-log-collector
              </a>
              <p className="pt-3 text-[14px] font-light leading-relaxed">
                Centralized log forwarding for Astranis Kubernetes clusters with
                the help of Fluentd and daemonsets.
              </p>
            </div>
            <div className="flex flex-col">
              <a
                onClick={() =>
                  toast("Coming soon!", {
                    description:
                      "I'll post a design doc soon. It will be password protected btw.",
                  })
                }
              >
                bazel-rulejs-migration
              </a>
              <p className="pt-3 text-[14px] font-light leading-relaxed">
                Migrated Astranis' javascript builds to be driven by Bazel in an
                integrated repository style. Still a WIP.
              </p>
            </div>
            <div className="flex flex-col">
              <a onClick={() => popup("https://www.atomuscyber.com/")}>
                atomus-landing-page
              </a>
              <p className="pt-3 text-[14px] font-light leading-relaxed">
                Atomus' main website for product marketing and overview.
              </p>
            </div>
            <div className="flex flex-col">
              <a onClick={() => popup("https://samkyuseo.com/")}>
                samkyuseo.com
              </a>
              <p className="pt-3 text-[14px] font-light leading-relaxed">
                Boring personal website built with Vite, React, Tailwind and
                FastAPI. Inspo from{" "}
                <strong onClick={() => popup("https://nexxel.dev")}>
                  nexxel.dev
                </strong>{" "}
                and{" "}
                <strong onClick={() => popup("https://ui.shadcn.com/")}>
                  shadcn
                </strong>
                .
              </p>
            </div>
          </div>
          <h2>Blog</h2>
          <p>
            How I study for interviews, technical design docs for my projects,
            and my personal experiences in tech. Coming soon.
          </p>
        </main>
        <div className="mt-14"></div>
        <div className="prose">
          <hr></hr>
          <footer className="text-muted-foreground my-4 flex items-center justify-between">
            <span>samuel kyuseo lee</span>
            <Button variant="ghost" size="icon">
              <Linkedin
                className="h-4 w-4"
                onClick={() => popup("https://linkedin.com/in/samkyuseo")}
              />
            </Button>
          </footer>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;

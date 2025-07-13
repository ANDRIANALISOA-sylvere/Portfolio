const contacts = [
  {
    name: "Twitter",
    link: "https://x.com/sylverejosephin",
    svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M18.205 2.25h3.308l-7.227 8.26l8.502 11.24H16.13l-5.214-6.817L4.95 21.75H1.64l7.73-8.835L1.215 2.25H8.04l4.713 6.231l5.45-6.231Zm-1.161 17.52h1.833L7.045 4.126H5.078L17.044 19.77Z"></path></svg>',
  },
  {
    name: "Facebook",
    link: "https://web.facebook.com/profile.php?id=100094686108117",
    svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M9.198 21.5h4v-8.01h3.604l.396-3.98h-4V7.5a1 1 0 0 1 1-1h3v-4h-3a5 5 0 0 0-5 5v2.01h-2l-.396 3.98h2.396v8.01Z"></path></svg>',
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/josephin-sylvere",
    svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M6.94 5a2 2 0 1 1-4-.002a2 2 0 0 1 4 .002ZM7 8.48H3V21h4V8.48Zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91l.04-1.68Z"></path></svg>',
  },
  {
    name: "Discord",
    link: "https://discord.com/users/1102976713719296010",
    svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M19.27 5.33C17.94 4.71 16.5 4.26 15 4a.09.09 0 0 0-.07.03c-.18.33-.39.76-.53 1.09a16.09 16.09 0 0 0-4.8 0c-.14-.34-.35-.76-.54-1.09c-.01-.02-.04-.03-.07-.03c-1.5.26-2.93.71-4.27 1.33c-.01 0-.02.01-.03.02c-2.72 4.07-3.47 8.03-3.1 11.95c0 .02.01.04.03.05c1.8 1.32 3.53 2.12 5.24 2.65c.03.01.06 0 .07-.02c.4-.55.76-1.13 1.07-1.74c.02-.04 0-.08-.04-.09c-.57-.22-1.11-.48-1.64-.78c-.04-.02-.04-.08-.01-.11c.11-.08.22-.17.33-.25c.02-.02.05-.02.07-.01c3.44 1.57 7.15 1.57 10.55 0c.02-.01.05-.01.07.01c.11.09.22.17.33.26c.04.03.04.09-.01.11c-.52.31-1.07.56-1.64.78c-.04.01-.05.06-.04.09c.32.61.68 1.19 1.07 1.74c.03.02.06.03.09.02c1.72-.53 3.45-1.33 5.25-2.65c.02-.01.03-.03.03-.05c.44-4.53-.73-8.46-3.1-11.95c-.01-.01-.02-.02-.04-.02zM8.52 14.91c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.84 2.12-1.89 2.12zm6.97 0c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.83 2.12-1.89 2.12z"></path></svg>',
  },
  {
    name: "Email",
    link: "mailto:josephinsylvere@gmail.com",
    svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm9.06 8.683L5.648 6.238L4.353 7.762l7.72 6.555l7.581-6.56l-1.308-1.513l-6.285 5.439z"></path></svg>',
  },
  {
    name: "Github",
    link: "https://github.com/ANDRIANALISOA-sylvere",
    svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"></path></svg>',
  },
];

export function Contact() {
  return (
    <section className="mt-20 mb-12 px-8" id="contact">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-bold text-3xl md:text-4xl text-blue-500 mb-12 flex items-center gap-3">
          Contact
          <span className="text-2xl">📞</span>
        </h2>

        <div className="bg-white p-4">
          <div className="text-center mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Let&apos;s get in touch!
            </h3>
            <p className="text-gray-600">
              Feel free to reach out through any of these platforms
            </p>
          </div>

          {/* Social Links Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
            {contacts.map((contact, index) => (
              <a
                href={contact.link}
                key={index}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative"
              >
                <div className="rounded-xl p-4 text-center transition-all duration-300 hover:scale-105">
                  <div className="relative">
                    {/* Icon container */}
                    <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center rounded-lg bg-white shadow-sm group-hover:shadow-md transition-shadow">
                      <span
                        className="text-gray-600 group-hover:text-purple-600 transition-colors duration-200"
                        dangerouslySetInnerHTML={{ __html: contact.svg }}
                      />
                    </div>
                    {/* Platform name */}
                    <p className="text-sm font-medium text-gray-700 group-hover:text-purple-600 transition-colors">
                      {contact.name}
                    </p>

                    {/* Hover indicator */}
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-300 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Direct Contact Section */}
          <div className="border-t border-gray-200 pt-6 sm:px-4 md:px-8">
            <div className="bg-gradient-to-r from-purple-50 via-blue-50 to-pink-50 rounded-lg p-4 sm:p-6 text-center">
              <p className="text-gray-600 mb-4 text-sm sm:text-base">
                Prefer email?
              </p>
              <a
                href="mailto:josephinsylvere@gmail.com"
                className="inline-flex flex-wrap justify-center items-center gap-2 bg-yellow-300 hover:bg-yellow-400 text-purple-800 px-4 py-2 sm:px-6 sm:py-3 rounded-full font-semibold transition-all duration-200 hover:scale-105 hover:shadow-lg text-sm sm:text-base"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="flex-shrink-0"
                >
                  <path d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm9.06 8.683L5.648 6.238L4.353 7.762l7.72 6.555l7.581-6.56l-1.308-1.513l-6.285 5.439z" />
                </svg>
                <span className="break-all">josephinsylvere@gmail.com</span>
              </a>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-8">
          <p className="text-gray-500 text-sm pb-8">
            © 2025 Joséphin Sylvère • Made with ❤️ from Madagascar 🇲🇬
          </p>
        </div>
      </div>
    </section>
  );
}

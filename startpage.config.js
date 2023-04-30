const defaultConfig = {
  username: "Kyle",
  usLocalStorage: false,
  theme: {
    backgroundColor: "#121317",
    windowColor: "#1e212b",
    glowColor: "#6b5cb157",
    white: "#e2e2e2",
    gray: "#97989d",
    black: "#16161e",
    red: "#ec6183",
    green: "#2ed8a2",
    yellow: "#e8b195",
    blue: "#2bc3de",
    cyan: "#62e0e2",
    magenta: "#e069aa",
    violet: "#d1aff8",
    orange: "#ff8800",
  },
  terminal: {
    fixedHeight: true,
    windowGlow: true,
    textGlow: false,
  },
  prompt: {
    ctrlC: true,
    placeholder: "command...",
    placeholderColor: "gray",
    userColor: "green",
    atColor: "gray",
    hostColor: "magenta",
    promptColor: "magenta",
    promptSymbol: "❯",
    caretColor: "green",
    selectionBg: "yellow",
    selectionFg: "black",
  },
  fetch: {
    timeFormat: "HH:mm",
    dateFormat: "DD/MM/YYYY",
    titleColor: "yellow",
  },
  urlLaunch: {
    target: "_self",
    defaultColor: "white",
    hoverColor: "violet",
  },
  search: {
    target: "_self",
    shortcutRegex: "([A-Za-z0-9]+) (.*)",
    engines: [
      {
        alias: "w",
        name: "Whoogle Search",
        url: "https://whoogle.l.talos.one/search?preferences=uG7EFAIzDdIs9R87gSShURq3tVdInc0QjjelUhnoJ8-TRNh4hsznXk3olh-WRE712QBmR8fn_7514GEX64zCg8J-O_3f_WLNJY9lex0u0iLIM01SWa67BGlZ-Oxl7Cr-_yHS_3GgF_rwCwn0x-2fNNNVQBqvgZGDagu2mROgipPmIEbIXQ4R1jw3MWi-K_pjBSf_HMB3n46jr9VAb6GT_okUFmsgvJUz-3ZrUn1YMQADYLd8___Jhqqc0SlUsyyjJcgi279u6F6vNxpyWH9XjFCyWlQAxoUUk5caciVkkcjeXWPEzI86IRDIyFCO7eplBkXSiHjRiKQXzjwM0VSGFkqyg4wcEv2ApNTEjfPjyyvtUEL_3IABQqyy8SAkljKx7UwHrHpIG1N6kMPDNzIh2sxW_Ts-bGWWUUyjD0RuVMFGlVoYojk9lx5IzbFEehUC1b5qWNvL11IBmZIW4AVakwVESwbl8MrVoW7myNid3MgexNRPE9fxO8NNNZRNSiNqNOG4wFHovarF3cPaHei04DtDIsoJ7RJh6jsjr_MluKFHU5gFCEDk6hBTCxvclNOYJ7FtuM3UN_jSt-ZelWRHWaF7AtDetGb1oPKSQN-Wld2NhgqZwqZR1Al9QpuWuNS1aPJWMjaAhCHriaHd900dD6zPvZXETYwd9-XhYshNARatrojTOAQ==&q={}",
        default: true,
      },
      {
        alias: "g",
        name: "Google Search",
        url: "https://google.com/search?q={}",
      },
      {
        alias: "q",
        name: "Qwant Search",
        url: "https://www.qwant.com/?q={}&client=opensearch&t=web",
      },
      {
        alias: "d",
        name: "DuckDuckGo Search",
        url: "https://duckduckgo.com/?q={}",
      },
      {
        alias: "b",
        name: "Brave Search",
        url: "https://search.brave.com/search?q={}",
      },
      {
        alias: "gh",
        name: "Github Search",
        url: "https://github.com/search?q={}",
      },
      {
        alias: "s",
        name: "Stack Overflow Search",
        url: "https://stackoverflow.com/search?q={}",
      },
      {
        alias: "r",
        name: "Subreddit Search",
        url: "https://reddit.com/r/{}",
      },
      {
        alias: "w",
        name: "Wikipedia Search",
        url: "https://en.wikipedia.org/wiki/{}",
      },
    ],
  },
  sections: [
    {
      title: "General",
      color: "violet",
      align: "left",
      links: [
        {
          name: "Reddit",
          url: "https://reddit.com",
          icon: "ic:baseline-reddit",
        },
        {
          name: "Weather",
          url: "https://www.wunderground.com/forecast/us/va/midlothian/KVAMIDLO136",
          icon: "mdi:weather-partly-cloudy",
        },
        {
          name: "ChatGPT",
          url: "https://chat.openai.com/",
          icon: "simple-icons:openai",
        },
        {
          name: "Amazon",
          url: "https://www.amazon.com/",
          icon: "ri:amazon-fill",
        },
        {
          name: "ESPN",
          url: "https://www.espn.com/",
          icon: "material-symbols:sports-football-rounded",
        },
        {
          name: "Premier League Table",
          url: "https://www.premierleague.com/tables",
          icon: "arcticons:premier-league",
          alias: "plt",
        },
        {
          name: "eBay",
          url: "https://www.ebay.com/myb/Summary?MyEbayBeta",
          icon: "fa6-brands:ebay",
        },
        {
          name: "Chewy",
          url: "https://www.chewy.com/",
          icon: "ic:round-pets",
        },
        {
          name: "Walmart",
          url: "https://www.walmart.com/cp/groceries-essentials/1735450",
          icon: "tabler:brand-walmart",
          alias: "wm",
        },
      ],
    },
    {
      title: "Avise Repos",
      color: "blue",
      align: "left",
      links: [
        {
          name: "Avise API",
          url: "https://github.com/AviseInc/avise-api/",
          icon: "ic:round-api",
          alias: "api",
        },
        {
          name: "Avise Web",
          url: "https://github.com/AviseInc/avise-web",
          icon: "icon-park-outline:browser",
          alias: "web",
        },
        {
          name: "Gitops",
          url: "https://github.com/AviseInc/gitops",
          icon: "eos-icons:code-deploy-outlined",
        },
        {
          name: "QBO Sync",
          url: "https://github.com/AviseInc/qbo-sync-service",
          icon: "material-symbols:sync-rounded",
          alias: "qsync",
        },
        {
          name: "Codat Sync",
          url: "https://github.com/AviseInc/codat-sync-service",
          icon: "material-symbols:sync-rounded",
          alist: "csync",
        },
      ],
    },
    {
      title: "Avise Resources",
      color: "blue",
      align: "left",
      links: [
        {
          name: "JIRA",
          url: "https://aviseinc.atlassian.net/jira/software/c/projects/AA/boards/20",
          icon: "mdi:jira",
        },
        {
          name: "AWS SSO",
          url: "https://avise.awsapps.com/start/",
          icon: "cib:amazon-aws",
          alias: "aws",
        },
        {
          name: "DataDog",
          url: "https://app.datadoghq.com/help/quick_start",
          icon: "simple-icons:datadog",
          alias: "dd",
        },
        {
          name: "ArgoCD",
          url: "https://stackoverflow.com/",
          icon: "simple-icons:argo",
          alias: "argo",
        },
        {
          name: "Auth0",
          url: "https://manage.auth0.com/dashboard/us/avise-prod/",
          icon: "cib:auth0",
        },
        {
          name: "Notion",
          url: "https://www.notion.so/avise/Engineering-ba1e49931dc74c45bd49358a4b21d892",
          icon: "radix-icons:notion-logo",
        },
        {
          name: "Quickbooks Online",
          url: "https://developer.intuit.com/app/developer/sandbox",
          icon: "simple-icons:quickbooks",
          alias: "qbo",
        },
        {
          name: "Avise Dev",
          url: "https://dev.avise.ai/",
          icon: "material-symbols:logo-dev-rounded",
          alias: "dev",
        },
        {
          name: "Avise Prod",
          url: "https://alpha.avise.com/",
          icon: "ri:product-hunt-fill",
          alias: "prod",
        },
        {
          name: "Rippling",
          url: "https://app.rippling.com/dashboard",
          icon: "ph:waveform-fill",
        },
        {
          name: "Ramp",
          url: "https://app.ramp.com/home",
          icon: "ic:sharp-ramp-right",
        },
        {
          name: "QBO Delveloper Docs",
          url: "https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/account",
          icon: "simple-icons:quickbooks",
        },
        {
          name: "Carta",
          url: "https://app.carta.com/investors/individual/1458449/portfolio/1152383/overview",
          icon: "icon-park-solid:handle-c",
        },
        {
          name: "JIRA - IT/Ops",
          url: "https://aviseinc.atlassian.net/jira/servicedesk/projects/OPS/section/service-requests/custom/4",
          icon: "mdi:jira",
        },
      ],
    },
    {
      title: "Finance",
      color: "green",
      align: "left",
      links: [
        {
          name: "YNAB",
          url: "https://app.ynab.com/",
          icon: "fluent:money-calculator-24-filled",
        },
        {
          name: "Capital One",
          url: "https://myaccounts.capitalone.com/accountSummary",
          icon: "mdi:bank",
          alias: "c1",
        },
        {
          name: "American Express",
          url: "https://www.americanexpress.com/en-us/account/login?DestPage=https%3A%2F%2Fglobal.americanexpress.com%2Faccount-management%3Finav%3Dmyca_account_services_one_amex",
          icon: "fa6-brands:cc-amex",
          alias: "amex",
        },
        {
          name: "Chase",
          url: "https://secure07b.chase.com/web/auth/dashboard#/dashboard/overviewAccounts/overview/singleLoan",
          icon: "cib:chase",
        },
        {
          name: "Credit Karma",
          url: "https://www.creditkarma.com/dashboard",
          icon: "ic:round-credit-score",
          alias: "ck",
        },
        {
          name: "Citi",
          url: "https://online.citi.com/US/Welcome.c",
          icon: "material-symbols:credit-card-outline",
        },
        {
          name: "E*TRADE",
          url: "https://us.etrade.com/home",
          icon: "icon-park-solid:chart-stock",
        },
        {
          name: "Fidelity",
          url: "https://login.fidelity.com/ftgw/Fidelity/RtlCust/Login/Init?AuthRedUrl=https://oltx.fidelity.com/ftgw/fbc/oftop/portfolio#positions",
          icon: "material-symbols:chart-data-rounded",
        },
        {
          name: "Virginia529",
          url: "https://myaccount.virginia529.com/pls/prod/twpkwbis.P_wwwlogin",
          icon: "ic:round-savings",
          alias: "529",
        },
        {
          name: "PenFed",
          url: "https://www.penfed.org/login",
          icon: "map:car-dealer",
        },
        {
          name: "CarMax",
          url: "https://www4.carmax.com/account/summary?header=Linked&hslb=True",
          icon: "map:car-dealer",
        },
        {
          name: "Synchrony - Amazon",
          url: "https://amazon.syf.com/login/",
          icon: "cib:chase",
        },
        {
          name: "Synchrony - Newegg/Lovesac",
          url: "https://www.mysynchrony.com/",
          icon: "cib:chase",
        },
        {
          name: "PenFed",
          url: "https://www.penfed.org/login",
          icon: "cib:chase",
        },
      ],
    },
    {
      title: "Homelab",
      color: "orange",
      align: "left",
      links: [
        {
          name: "Aion",
          url: "http://aion.l.talos.one/Dashboard",
          icon: "simple-icons:unraid",
        },
        {
          name: "Hestia",
          url: "http://192.168.1.221:8123/lovelace/0",
          icon: "mdi:home-assistant",
        },
        {
          name: "Coeus",
          url: "https://coeus.l.talos.one/",
          icon: "material-symbols:router-outline-rounded",
        },
        {
          name: "Metis",
          url: "https://metis.l.talos.one/",
          icon: "simple-icons:adguard",
        },
        {
          name: "Athena",
          url: "https://athena.l.talos.one/",
          icon: "cib:nginx",
        },
        {
          name: "PC Part Picker",
          url: "https://pcpartpicker.com/user/kylerm42/saved/ZCGqRB",
          icon: "ion:hardware-chip",
          alias: "pcpp",
        },
      ],
    },
    {
      title: "Media",
      color: "violet",
      align: "left",
      links: [
        {
          name: "Plex",
          url: "https://app.plex.tv/desktop/#!/",
          icon: "mdi:plex",
        },
        {
          name: "Overseerr",
          url: "https://overseerr.l.talos.one/",
          icon: "ri:eye-2-line",
        },
        {
          name: "Radarr",
          url: "https://radarr.l.talos.one/",
          icon: "material-symbols:movie",
        },
        {
          name: "Sonarr",
          url: "https://sonarr.l.talos.one/",
          icon: "ic:outline-tv",
        },
        {
          name: "Tautulli",
          url: "https://tautulli.l.talos.one/",
          icon: "fluent:receipt-play-24-filled",
        },
      ],
    },
  ],
}

export default defaultConfig

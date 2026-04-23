const normalizeTitle = (t) => (t || "").trim().toLowerCase().replace(/\s+/g, " ");

export function mergeByTitle(items) {
    const byTitle = new Map();
    const merged = [];
    for (const item of items) {
        const key = normalizeTitle(item.title);
        const existing = byTitle.get(key);
        if (existing) {
            if (!existing.mirrors) {
                existing.mirrors = [{ host: existing.host, url: existing.url }];
            }
            existing.mirrors.push({ host: item.host, url: item.url });
        } else {
            const copy = { ...item };
            byTitle.set(key, copy);
            merged.push(copy);
        }
    }
    return merged;
}

export const blogs = [
    {
        order: 1,
        title: "NodeJS / ReactJS: Payment Integration with PayUMoney",
        host: "Medium",
        date: "18 Jan, 2018",
        url: "https://medium.com/@vilvaathiban/nodejs-reactjs-payment-integration-with-payumoney-395f7768a92b",
    },
    {
        order: 2,
        title: "JavaScript — Nested Objects",
        host: "Medium",
        date: "19 Jul, 2018",
        url: "https://medium.com/@vilvaathiban/javascript-objects-check-if-a-property-is-present-including-nested-objects-d58b1571f16",
    },
    {
        order: 3,
        title: "JavaScript Animations — Element.animate vs requestAnimationFrame vs Conventional Animation",
        host: "Medium",
        date: "17 Sept, 2018",
        url: "https://medium.com/@vilvaathiban/javascript-animations-element-animate-vs-requestanimationframe-vs-conventional-animation-550380b9e05e",
    },
    {
        order: 4,
        title: "NextJS — Convert Client-Side React app to Server-side Rendering in 5 mins",
        host: "Medium",
        date: "27 Sept, 2018",
        url: "https://medium.com/@vilvaathiban/nextjs-convert-client-side-react-app-to-server-side-rendering-in-5-mins-2106ad69f5a5",
    },
    {
        order: 5,
        title: "JavaScript — A Brush up on Prototypal Inheritance",
        host: "Medium",
        date: "15 Oct, 2018",
        url: "https://medium.com/@vilvaathiban/javascript-a-brush-up-on-prototypal-inheritance-597a7eebc4f0",
    },
    {
        order: 6,
        title: "JavaScript — A Deep dive into Prototypal Inheritance",
        host: "Medium",
        date: "15 Oct, 2018",
        url: "https://medium.com/@vilvaathiban/javascript-a-deep-dive-into-prototypal-inheritance-part-2-b1ad2c23a1cb",
    },
    {
        order: 7,
        title: "React-Styled Components: A smart way (Also React Native)",
        host: "Medium",
        date: "20 Nov, 2019",
        url: "https://medium.com/@vilvaathiban/react-styled-components-a-smart-way-26ff8bfdaec7",
    },
    {
        order: 8,
        title: "React to React Native: Tips and tricks for your journey",
        host: "Omio Engineering",
        date: "10 Jan, 2020",
        url: "https://medium.com/omio-engineering/react-to-react-native-tips-and-tricks-for-your-journey-c5f5ddfc09b5",
    },
    {
        order: 9,
        title: "Common anti-patterns in GraphQL schema design",
        host: "LogRocket",
        date: "18 May, 2020",
        url: "https://blog.logrocket.com/anti-patterns-graphql-schema-design/",
    },
    {
        order: 10,
        title: "Client-side query customization in GraphQL",
        host: "LogRocket",
        date: "30 Jun, 2020",
        url: "https://blog.logrocket.com/client-side-query-customization-in-graphql/",
    },
    {
        order: 11,
        title: "Optimized media loading using Web Workers",
        host: "LogRocket",
        date: "20 Oct, 2020",
        url: "https://blog.logrocket.com/optimized-media-loading-web-workers/",
    },
    {
        order: 12,
        title: "RedwoodJS with Hasura = ❤️",
        host: "Hasura",
        date: "10 Nov, 2020",
        url: "https://hasura.io/blog/redwoodjs-with-graphql-hasura/",
    },
    {
        order: 13,
        title: "Zones in NextJS",
        host: "LogRocket",
        date: "Dec 7, 2020",
        url: "https://blog.logrocket.com/exploring-zones-in-next-js/",
    },
    {
        order: 14,
        title: "How to fix layout shifts to improve SEO in Next.js apps",
        host: "LogRocket",
        date: "26 Mar, 2021",
        url: "https://blog.logrocket.com/fix-layout-shifts-improve-seo-next-js/",
    },
    {
        order: 15,
        title: "Run animations in React and React Native from one codebase",
        host: "LogRocket",
        date: "02 Jul, 2021",
        url: "https://blog.logrocket.com/run-animations-react-react-native-one-codebase/",
    },
    {
        order: 16,
        title: "How Claude Code Uses React in the Terminal",
        host: "dev.to",
        date: "15 Apr, 2026",
        url: "https://dev.to/vilvaathibanpb/how-claude-code-uses-react-in-the-terminal-2f3b",
    },
    {
        order: 17,
        title: "How Claude Code Uses React in the Terminal",
        host: "Medium",
        date: "15 Apr, 2026",
        url: "https://vilvaathiban.medium.com/how-claude-code-uses-react-in-the-terminal-cba08fb436e5",
    },
    {
        order: 18,
        title: "Memory management in Claude Code: Context Pipeline",
        host: "dev.to",
        date: "22 Apr, 2026",
        url: "https://dev.to/vilvaathibanpb/memory-management-in-claude-code-context-pipeline-1j1p",
    },
    {
        order: 19,
        title: "Memory management in Claude Code: Context Pipeline",
        host: "Medium",
        date: "22 Apr, 2026",
        url: "https://medium.com/p/622fb46c7360",
    },
]
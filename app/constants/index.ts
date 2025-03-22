export const navLinks = [
	{
		id: "about",
		title: "About",
	},
	{
		id: "work",
		title: "Work",
	},
	{
		id: "contact",
		title: "Contact",
	},
];

const services = [
	{
		title: "Backend Developer",
		icon: "/backend.webp",
	},
	{
		title: "Full Stack Web Developer",
		icon: "/web.webp",
	},
	{
		title: "App Developer",
		icon: "/mobile.webp",
	},
	{
		title: "Software Engineer",
		icon: "/creator.webp",
	},
];

const technologies = [
	{
		name: "ASP.NET",
		icon: "/tech/asp.png",
	},
	{
		name: "Docker",
		icon: "/tech/docker.png",
	},
	
	{
		name: "TypeScript",
		icon: "/tech/typescript.webp",
	},
	{
		name: "React JS",
		icon: "/tech/reactjs.webp",
	},
	{
		name: "Next.JS",
		icon: "/tech/nextjs.svg",
	},
	{
		name: "Redux Toolkit",
		icon: "/tech/redux.webp",
	},
	{
		name: "Tailwind CSS",
		icon: "/tech/tailwind.webp",
	},
	{
		name: "Swagger",
		icon: "/tech/swagger.png",
	},
	{
		name: "git",
		icon: "/tech/git.webp",
	},
	{
		name: "figma",
		icon: "/tech/figma.webp",
	},
	{
		name: "AWS",
		icon: "/tech/aws.svg",
	},
	{
		name: "Redis",
		icon: "/tech/redis.png",
	},
	{
		name: "bootstrap",
		icon: "/tech/bootstrap.webp",
	},
];

const experiences = [
	{
		title: "Fullstack Developer Intern",
		company_name: "IEMA",
		icon: "/company/iemlabs.png",
		iconBg: "#383E56",
		date: "2022 -  2023",
		points: [
			"Collaborative Design: Worked closely with stakeholders to gather feedback and iterate on the portfolio website's interactivity.",
			"Successful Website Development: Designed and developed a visually appealing and user-friendly portfolio website using Mernstack.",
			"Positive Business Impact: Contributed to +54.25% engagement and overall business growth through the improved website."
		],
	},
	{
		title: "Backend Developer",
		company_name: "CodeApto Pvt. Ltd.",
		icon: "/company/codeapto_logo.jpg",
		iconBg: "#E6DEDD",
		date: "2023 - 2024",
		points: [
			"Implemented scalable, maintainable, and secure solutions adhering to coding standards in client project, improving API response time",
			"Design Maintainence and hosting maintenance.",
		],
	},
	
	{
		title: "ASP.NET Developer",
		company_name: "Accenture",
		icon: "/company/Accenture-Logo.png",
		iconBg: "#E6DEDD",
		date: "2024 - Present",
		points: [
			"Implemented scalable, maintainable, and secure solutions adhering to coding standards in client project, improving API response time",
			"Added Unit test case projects in application for each application layer to ensure code reliability, increasing test coverage by 30% ,Used AWS services such as AWS Lambda, SQS, Step Function, API Gateway, S3, CloudWatch",
		],
	},
];

const testimonials = [
	
	{
		id: 1,
		testimonial:
			"LinkedIn is a business and employment-focused social media platform that works through websites and mobile apps.",
		name: "Subhasish Halder",
		image: "/socialmedia/linkedin.svg",
		link: "https://www.linkedin.com/in/subhasish-halder-173a86201/",
	},
	
	{
		id: 2,
		testimonial:
			"Also do check out my Leetcode Profile- Problem solving Skills.",
		name: "Subhasish Halder",
		image: "/socialmedia/leetcodep.png",
		link: "https://leetcode.com/u/subhasishhalder107/",
	},
	{
		id: 3,
		testimonial:
			"Also do check out my Github Profile where I have shared all my codes from basic to advanced.",
		name: "Subhasish Halder",
		image: "/tech/github.webp",
		link: "https://github.com/subh839",
	},
];


const projects :{
	name: string;
	description: string;
	tags: {
		name: string;
		color: string;
	}[];
	image: string;
	source_code_link?: string;
	deploy_link: string;
	platform: "React" | "Vercel" | "Figma" | "Python" | "Web"
}[] = [
	{
		name: "Auto-Forecast",
		description:
			"A Designed and developed a visually appealing and user-friendly portfolio website using WordPress.",
		tags: [
			{
				name: "React",
				color: "blue-text-gradient",
			},
			{
				name: "Auto-Forecast",
				color: "green-text-gradient",
			},
		],
		image: "/projectimg/auto.png",
		platform: "React",
		source_code_link: "https://github.com/subh839/Auto-Forecast-Frontend",
		deploy_link: "https://auto-forecast-frontend-85mjpqjme-subh839s-projects.vercel.app/",
	},
	
	{
		name: "MERN E-commerce",
		description:
			" Designed and developed a visually appealing and user-friendly E-commerce using MERN",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "materialui",
				color: "orange-text-gradient",
			},
			{
				name: "MongoDB",
				color: "green-text-gradient",
			},
			{
				name: "Express",
				color: "pink-text-gradient",
			},
		],
		image: "/projectimg/e-com.jpg",
		source_code_link: "https://github.com/subh839/E-com-frontend",
		platform: "Web",
		deploy_link: "https://github.com/subh839/backend-services/",
	},
	{
		name: "Jober",
		description:
			"A Modern App to Find Jobs.",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "node",
				color: "green-text-gradient",
			},
			{
				name: "Mongodb",
				color: "orange-text-gradient",
			},
		],
		image: "/projectimg/herobg.png",
		source_code_link: "https://github.com/subh839/Jober-frontend",
		platform: "Vercel",
		deploy_link: "https://github.com/subh839/Oneclick-backend-deploy",
	},
	{
		name: "Asp.net Project",
		description:
			"Prod-Subscriber",
		tags: [
			{
				name: "Asp.net",
				color: "blue-text-gradient",
			},
			{
				name: "Kafka",
				color: "green-text-gradient",
			},
			{
				name: "SQL",
				color: "orange-text-gradient",
			},
		],
		image: "/projectimg/kafka.webp",
		source_code_link: "https://github.com/subh839/Ecommerce",
		platform: "Vercel",
		deploy_link: "",
	},
];

export { services, technologies, experiences, testimonials, projects };

import Link from "next/link";

const services = [
    {
        title: "Text Summarization",
        description:
            "Get concise summaries of lengthy articles, documents, or emails quickly and accurately.",
        icon: "/icons/summarization.png", // Example icon path
        link: "/services/text-summarization",
    },
    {
        title: "Content Analysis",
        description:
            "Analyze text content to extract key insights and trends, helping you make data-driven decisions.",
        icon: "/icons/analysis.png", // Example icon path
        link: "/services/content-analysis",
    },
    {
        title: "Visual Insights",
        description:
            "Visualize insights from your text content with charts and graphs to understand data better.",
        icon: "/icons/visualization.png", // Example icon path
        link: "/services/visual-insights",
    },
];

const Services: React.FC = () => {
    return (
        <main className="px-4 py-8 max-w-7xl mx-auto">
            <header className="text-center mb-12">
                <h1 className="text-4xl font-bold mb-4">
                    Introduction to Our Tool
                </h1>
                <p className="text-lg text-gray-600">
                    Discover how our tool helps you manage and analyze text
                    content efficiently.
                </p>
            </header>

            <section className="text-center mb-12">
                <h2 className="text-3xl font-semibold mb-6">Features</h2>
                <ul className="list-disc list-inside text-left mx-auto max-w-3xl">
                    <li>Summarize lengthy text quickly and accurately.</li>
                    <li>Analyze text to extract key insights and trends.</li>
                    <li>
                        Visualize data with charts and graphs for better
                        understanding.
                    </li>
                </ul>
            </section>

            <section className="text-center">
                <h2 className="text-3xl font-semibold mb-6">Get Started</h2>
                <div className="flex justify-center gap-4">
                    <Link
                        href="/login"
                        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                    >
                        Sign In
                    </Link>
                    <Link
                        href="/signup"
                        className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
                    >
                        Sign Up
                    </Link>
                    <Link
                        href="/upload"
                        className="bg-purple-500 text-white py-2 px-4 rounded hover:bg-purple-600"
                    >
                        Upload Content
                    </Link>
                </div>
            </section>
        </main>
    );
};

export default Services;

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const items = [
  {
    questions: "What is a dashboard application?",
    answer:
      "A dashboard application is a user interface that displays key metrics and data in a visual format, often using charts, graphs, and tables. It is used to monitor performance, track progress, and make informed decisions based on real-time data.",
  },
  {
    questions: "How do I customize the dashboard layout?",
    answer:
      "To customize the dashboard layout, you can drag and drop widgets or panels to arrange them as per your preference. Most dashboard applications allow resizing, minimizing, or adding new panels that display different types of data or visualizations.",
  },
  {
    questions: "Can I integrate third-party tools with the dashboard?",
    answer:
      "Yes, most modern dashboard applications support integration with third-party tools. You can connect services like Google Analytics, CRM software, or project management tools to fetch data directly into the dashboard for a unified view.",
  },
  {
    questions: "How can I set up alerts on the dashboard?",
    answer:
      "Alerts can typically be set up within the dashboard application by configuring thresholds for specific metrics. Once a metric crosses a set threshold, the dashboard can notify users via email, SMS, or push notifications to take necessary actions.",
  },
];

export function Faq() {
  return (
    <section className="px-[20px] lg:container lg:px-20 mx-auto">
      <div className="flex flex-col w-full gap-8 py-12 lg:flex-row">
        <div className="lg:w-1/3 lg:p-14">
          <h3 className="text-red-600 text-lg font-semibold lg:text-2xl">
            Frequently Asked Questions
          </h3>
          <h1 className="text-3xl lg:text-4xl py-4 font-semibold">
            Let&apos;s clarify some of your questions
          </h1>
          <p className="text-black/80 text-lg">
            Lorem ipsum, dolor sit amet, consectetur adipisicing elit, seddo
            eiusmod tempor incididunt ut labore.
          </p>
        </div>

        <div className="lg:w-2/3">
          <Accordion
            type="single"
            defaultValue="item-1"
            collapsible
            className="flex flex-col gap-y-4"
          >
            {items.map((item, i) => (
              <div key={i}>
                <AccordionItem
                  value={`item-${i + 1}`}
                  className="bg-purple-100 px-8 py-4 rounded"
                >
                  <AccordionTrigger
                    aria-expanded="false" // Added for accessibility
                    aria-controls={`item-${i + 1}`} // Added for accessibility
                  >
                    <h2 className="text-lg font-medium text-purple-800">
                      {item.questions}
                    </h2>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-base text-black/70">{item.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              </div>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}

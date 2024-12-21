import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"


const FAQAccordion = () => {
    const faqs = [
        {
            id: 1,
            title: "What is car chiptuning?",
            content: "Car chiptuning is the process of reprogramming the Engine Control Unit (ECU) to enhance your vehicle’s performance. By adjusting parameters like fuel delivery, ignition timing, and turbo pressure, we can improve horsepower, torque, and fuel efficiency."
        },
        {
            id: 2,
            title: "Is chiptuning safe for my car?",
            content: "Yes, when performed by professionals, chiptuning is completely safe. We ensure that the modifications remain within the manufacturer’s tolerance levels to avoid any long-term damage to the engine or components."
        },
        {
            id: 3,
            title: "Will chiptuning void my car’s warranty?",
            content: "In some cases, chiptuning can void the manufacturer’s warranty. However, we offer services that include reverting your ECU to its original settings, which may help in situations where warranty claims are necessary."
        }
    ]

    return (
        <div className="w-full">
            <Accordion type="single" collapsible className="w-full flex flex-col gap-y-4">
                {
                    faqs?.map((item, i) => (
                        <AccordionItem key={item?.id} value={`${item?.id}`} className="bg-[#FDFFFF]/10 px-8 py-1 rounded-2xl border-none">
                            <AccordionTrigger className="text-neutral-100">
                                {item?.title}
                            </AccordionTrigger>

                            <AccordionContent className="text-neutral-100">
                                {item?.content}
                            </AccordionContent>
                        </AccordionItem>
                    ))
                }
            </Accordion>
        </div>
    )
}

export default FAQAccordion
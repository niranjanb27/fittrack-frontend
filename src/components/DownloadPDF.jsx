import React from "react";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable"; // ✅ Correct import

const DownloadPDF = ({ bmi, category, plan }) => {
  const handleDownload = () => {
    const doc = new jsPDF();

    doc.setFontSize(16);
    doc.text("FitTrack - BMI Health Report", 14, 20);

    doc.setFontSize(12);
    doc.text(`BMI: ${bmi}`, 14, 30);
    doc.text(`Category: ${category}`, 14, 40);

    if (plan?.diet?.length > 0) {
      doc.text("Diet Plan", 14, 55);
      autoTable(doc, {
        startY: 60,
        head: [["Food", "Amount"]],
        body: plan.diet.map((item) => [item.name, item.amount]),
      });
    }

    if (plan?.exercise?.length > 0) {
      const y = doc.lastAutoTable?.finalY ? doc.lastAutoTable.finalY + 20 : 100;
      doc.text("Exercise Plan", 14, y);
      autoTable(doc, {
        startY: y + 5,
        head: [["Exercise", "Amount"]],
        body: plan.exercise.map((item) => [item.name, item.amount]),
      });
    }

    doc.save("Health_Plan.pdf"); // ✅ Trigger download
  };

  return (
    <button
      onClick={handleDownload}
      className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
    >
      Download detail PDF
    </button>
  );
};

export default DownloadPDF;

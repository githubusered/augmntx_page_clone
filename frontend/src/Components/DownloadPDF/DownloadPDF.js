import jsPDF from 'jspdf';
import 'jspdf-autotable';

const DownloadPDF = (profile) => {
  const doc = new jsPDF();
  const imgSrc = 'https://augmntx.com/assets/img/noimage.jpg'; // Replace with your logo URL

  doc.setFontSize(12);

  // Define the content of your PDF here
  const content = [
    { label: 'First Name:', value: profile.profile_info.first_name || 'John' },
    { label: 'Last Name:', value: profile.profile_info.last_name || 'Doe' },
    { label: 'Primary Title:', value: profile.profile_info.primary_title || 'Frontend Developer' },
    { label: 'Experience:', value: profile.profile_info.experience || '5 years' },
    { label: 'City:', value: profile.profile_info.city || 'City' },
    { label: 'Country:', value: profile.profile_info.country || 'Country' },
    { label: 'URL:', value: profile.profile_info.profile_url || 'https://example.com' },
    {
      label: 'Contact Info:',
      value: profile.profile_info.contactInfo || '+1 123-456-7890 | email@example.com',
    },
    { label: 'Summary:', value: profile.profile_info.bio || 'A passionate developer with expertise in various technologies.' },
    {
      label: 'Industries:',
      value: profile.profile_info.profile_industries ? profile.profile_info.profile_industries.join(', ') : 'Industry 1, Industry 2',
    },
  ];

  // Add the image to the PDF
  doc.addImage(imgSrc, 'JPEG', 150, 15, 50, 50);

  // Add the content to the PDF using autoTable
  doc.autoTable({
    startY: 75,
    body: content.map((item) => [item.label, item.value]),
  });

  // Save the PDF
  doc.save(
    `${profile.profile_info.primary_title} ${profile.profile_info.experience} years ${profile.profile_info.last_name} - AugmntX.pdf`
  );
};

export default DownloadPDF;

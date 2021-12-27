import PDFMerger from 'pdf-merger-js';
import fs from 'fs-extra';

let merger = new PDFMerger();

const mergePDF = async () => {
	//
	fs.readdir('./pdfToMerge', async (err, files) => {
		if (err) {
			console.log(`err =>`, err);
		}
		console.log(`files =>`, files);
		for (const file of files) {
			merger.add(`./pdfToMerge/${file}`);
		}
		await merger.save('merged.pdf');
	});
};

mergePDF();

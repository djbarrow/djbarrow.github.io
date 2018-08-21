#yourlight.pdf: yourlight.tex
#	latex yourlight.tex
#	dvipdf yourlight.dvi
nerds.pdf: nerds.tex Makefile
#nerds.ps: nerds.tex
	latex nerds.tex
	latex nerds.tex
#	dvipdf nerds.dvi
# Covert A4 to 9x6 inch pages
#	exec dvips -x 731 -y 769 -T 6in,9in -O -10mm,0mm -q -f nerds.dvi | gs -q -dNOPAUSE -dBATCH -sDEVICE=pdfwrite -sOutputFile=nerds.pdf -c .setpdfwrite -
#	exec dvips -p =2 -x 750 -y 750 -T 6in,9in -O -10mm,0mm -q -f nerds.dvi | gs -q -dNOPAUSE -dBATCH -sDEVICE=pdfwrite -sOutputFile=nerds.pdf -c .setpdfwrite -
	exec dvips -x 750 -y 750 -T 6in,9in -O -10mm,0mm -q -f nerds.dvi | gs -q -dNOPAUSE -dBATCH -sDEVICE=pdfwrite -sOutputFile=nerds.pdf -c .setpdfwrite -
#	dvips -x 731 -y 769 -T 6in,9in -O -10mm,0mm -q -f nerds.dvi > nerds.ps
#	dvipdfm -p a5 -m .708 -x 0.7in nerds.dvi
#nerds.ps: nerds.tex
#	latex nerds.tex
#	latex nerds.tex
#	dvips nerds.dvi


nerds2.pdf: nerds2.tex
	latex nerds2.tex
	dvipdf nerds2.dvi
theoryofcdr.pdf: theoryofcdr.tex
	latex theoryofcdr.tex
	dvipdf theoryofcdr.dvi
missiontomars.pdf: missiontomars.tex
	latex missiontomars.tex
	dvipdf missiontomars.dvi
nerds5.pdf: nerds5.tex
	latex nerds5.tex
	latex nerds5.tex
	dvipdf nerds5.dvi

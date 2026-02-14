import { Header } from "@/components/header"
import { TitleSection } from "@/components/sections/title-section"
import { AbstractSection } from "@/components/sections/abstract-section"
import { MarkdownSection } from "@/components/sections/markdown-section"
import { LatexSection } from "@/components/sections/latex-section"
import { TableSection } from "@/components/sections/table-section"
import { CollapseSection } from "@/components/sections/collapse-section"
import { ChartSection } from "@/components/sections/chart-section"
import { ImageSliderSection } from "@/components/sections/image-slider-section"
import { BibTexSection } from "@/components/sections/bibtex-section"

// config
const DEMO = {
  methodName: "Demo",
  venue: "Computer Vision Conference (20XX)",
  authorLink: "https://github.com/yourname",
  codeLink: "https://github.com/your-org/your-repo",
  year: "20XX",
}

// Demo data
const paperData = {
  title: `${DEMO.methodName}: A Novel Framework for Panoptic Segmentation with Semantic-Aware Learning and Adaptive Decoding`,
  authors: [
    { name: "Author One", affiliation: 1, link: DEMO.authorLink },
    { name: "Author Two", affiliation: 1 },
    { name: "Author Three", affiliation: 2, isCorresponding: true },
  ],
  affiliations: ["Department of Computer Science, University A", "Institute of AI Research, University B"],
  venue: DEMO.venue,
  links: {
    paper: "#",
    arxiv: "https://arxiv.org",
    code: DEMO.codeLink,
    data: "#",
    video: "#",
  },
}

const abstractText = `We present ${DEMO.methodName}, a novel framework for panoptic segmentation that achieves strong performance through semantic-aware learning and adaptive decoding strategies. Our approach addresses key challenges in unifying instance and semantic segmentation by introducing a hierarchical feature learning module that captures both local instance details and global semantic context. Extensive experiments on COCO, ADE20K, and Cityscapes benchmarks demonstrate that ${DEMO.methodName} improves over representative baselines while maintaining computational efficiency. We also provide ablation studies to validate the effectiveness of each proposed component.`

const methodologyContent = (
  <div className="space-y-4 text-muted-foreground leading-relaxed">
    <p>
      Our framework consists of three main components: (1) a semantic-aware backbone network that extracts
      multi-scale features with enhanced semantic understanding, (2) an adaptive decoder that dynamically
      adjusts its processing based on input complexity, and (3) a unified panoptic head that integrates
      instance and semantic predictions.
    </p>
    <p>
      The semantic-aware backbone builds upon a standard ResNet architecture but incorporates additional
      attention mechanisms at each stage to better capture long-range dependencies. This design allows the
      network to maintain both high-resolution spatial details and rich semantic information throughout the
      feature extraction process.
    </p>
  </div>
)

const formulas = [
  {
    label: "Panoptic Quality (PQ)",
    latex: "PQ = SQ × RQ = (1/|TP|) × Σ IoU(p,g) × |TP|/(|TP| + ½|FP| + ½|FN|)",
    description: "Panoptic Quality combines segmentation quality (SQ) and recognition quality (RQ) into a unified metric.",
  },
  {
    label: "Adaptive Loss Function",
    latex: "L = λ₁L_cls + λ₂L_mask + λ₃L_sem + λ₄L_boundary",
    description: "Our loss function adaptively balances classification, mask prediction, semantic segmentation, and boundary refinement.",
  },
]

const tableHeaders = [
  "Method",
  "Backbone",
  { content: "PQ", isLatex: false },
  { content: "SQ", isLatex: false },
  { content: "RQ", isLatex: false },
  { content: "PQ^{th}", isLatex: true },
  { content: "PQ^{st}", isLatex: true },
]

const tableRows = [
  ["Panoptic FPN", { content: "R_{50}", isLatex: true }, "39.0", "77.8", "48.1", "45.9", "28.7"],
  ["DETR", { content: "R_{50}", isLatex: true }, "43.4", "79.3", "53.8", "48.2", "35.8"],
  ["MaskFormer", { content: "R_{50}", isLatex: true }, "46.5", "80.4", "56.8", "51.0", "39.8"],
  ["Mask2Former", { content: "R_{50}", isLatex: true }, "51.9", "81.8", "62.3", "57.7", "43.0"],
  [
    { content: `${DEMO.methodName} (Ours)`, isBold: true },
    { content: "R_{50}", isLatex: true },
    { content: "\\mathbf{54.2}", isLatex: true, isBold: true },
    { content: "\\mathbf{82.6}", isLatex: true, isBold: true },
    { content: "\\mathbf{64.7}", isLatex: true, isBold: true },
    { content: "\\mathbf{59.8}", isLatex: true, isBold: true },
    { content: "\\mathbf{45.6}", isLatex: true, isBold: true },
  ],
]

const faqItems = [
  {
    title: `What makes ${DEMO.methodName} different from existing methods?`,
    content: `${DEMO.methodName} introduces a semantic-aware learning mechanism that better captures the relationship between instances and their semantic categories. Unlike approaches that treat instance and semantic segmentation separately, our method learns a unified representation that benefits both tasks.`,
  },
  {
    title: "What datasets were used for evaluation?",
    content: `We evaluated ${DEMO.methodName} on three major benchmarks: COCO panoptic, ADE20K, and Cityscapes. The method achieves strong results while maintaining competitive inference speed.`,
  },
  {
    title: "Is the code publicly available?",
    content: "Yes. This repository provides a reusable template, including demo sections, components, and placeholder content. Replace the demo data with your own project information.",
  },
]

const chartData = [
  { name: "COCO", ours: 54.2, maskformer: 46.5, mask2former: 51.9 },
  { name: "ADE20K", ours: 48.7, maskformer: 42.3, mask2former: 46.1 },
  { name: "Cityscapes", ours: 66.8, maskformer: 61.2, mask2former: 64.5 },
]

const chartDataKeys = [
  { key: "ours", color: "#1f1f1f", name: `${DEMO.methodName} (Ours)` },
  { key: "maskformer", color: "#9ca3af", name: "MaskFormer" },
  { key: "mask2former", color: "#d1d5db", name: "Mask2Former" },
]

const comparisonImages = [
  {
    before: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&blur=50",
    after: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format",
    beforeLabel: "Input",
    afterLabel: DEMO.methodName,
    caption: `Figure 1: Low-quality input vs. ${DEMO.methodName} enhanced segmentation result.`,
  },
  {
    before: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&auto=format&blur=50",
    after: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&auto=format",
    beforeLabel: "Baseline",
    afterLabel: "Ours",
    caption: "Figure 2: Comparison between baseline method and our approach on complex scene.",
  },
  {
    before: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&auto=format&blur=50",
    after: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&auto=format",
    beforeLabel: "Raw",
    afterLabel: "Enhanced",
    caption: "Figure 3: Raw input versus enhanced output demonstrating boundary refinement.",
  },
]

const bibtex = `@inproceedings{author${DEMO.year.toLowerCase()}demopan,
  title={${DEMO.methodName}: A Novel Framework for Panoptic
         Segmentation with Semantic-Aware Learning
         and Adaptive Decoding},
  author={Author, One and Author, Two and Author, Three},
  booktitle={Proceedings of a Computer Vision Conference},
  pages={1234--1243},
  year={${DEMO.year}}
}`

const images = [
  {
    before: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&blur=50",
    after: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format",
    beforeLabel: "Input",
    afterLabel: DEMO.methodName,
    caption: `Figure 1: Low-quality input vs. ${DEMO.methodName} enhanced segmentation result.`,
  },
  {
    before: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&auto=format&blur=50",
    after: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&auto=format",
    beforeLabel: "Baseline",
    afterLabel: "Ours",
    caption: "Figure 2: Comparison between baseline method and our approach on complex scene.",
  },
  {
    before: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&auto=format&blur=50",
    after: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&auto=format",
    beforeLabel: "Raw",
    afterLabel: "Enhanced",
    caption: "Figure 3: Raw input versus enhanced output demonstrating boundary refinement.",
  },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="px-6">
        {/* Title Section */}
        <TitleSection
          title={paperData.title}
          authors={paperData.authors}
          affiliations={paperData.affiliations}
          venue={paperData.venue}
          links={paperData.links}
        />

        {/* Divider */}
        <div className="mx-auto h-px w-24 bg-border" />

        {/* Abstract */}
        <AbstractSection
          content={abstractText}
          keywords={["Panoptic Segmentation", "Semantic Learning", "Computer Vision", "Deep Learning"]}
        />

        <div className="mx-auto h-px w-24 bg-border" />

        {/* Methodology */}
        <MarkdownSection title="Methodology" content={methodologyContent} />

        <div className="mx-auto h-px w-24 bg-border" />

        {/* Mathematical Formulation */}
        <LatexSection title="Mathematical Formulation" formulas={formulas} />

        <div className="mx-auto h-px w-24 bg-border" />

        {/* Results Table */}
        <TableSection
          title="Experimental Results"
          headers={tableHeaders}
          rows={tableRows}
          caption="Table 1: Comparison with representative methods on COCO panoptic val set."
        />

        <div className="mx-auto h-px w-24 bg-border" />

        {/* Chart */}
        <ChartSection
          title="Performance Comparison"
          data={chartData}
          dataKeys={chartDataKeys}
          caption="Figure: Panoptic Quality (PQ) comparison across different datasets."
        />

        <div className="mx-auto h-px w-24 bg-border" />

        {/* Image Slider */}
        <ImageSliderSection title="Visualizations" images={comparisonImages} />

        <div className="mx-auto h-px w-24 bg-border" />

        {/* FAQ / Collapse */}
        <CollapseSection title="Frequently Asked Questions" items={faqItems} />

        <div className="mx-auto h-px w-24 bg-border" />

        {/* BibTeX */}
        <BibTexSection citation={bibtex} />
      </main>

      {/* Footer */}
      <footer className="mt-16 border-t border-border bg-background">
        <div className="mx-auto max-w-4xl px-6 py-8">
          <div className="flex flex-col items-center justify-between gap-4 text-sm text-muted-foreground sm:flex-row">
            <p className="font-serif">{DEMO.methodName}</p>
            <p>© {new Date().getFullYear()} All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

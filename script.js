
const navTriggers = document.querySelectorAll('[data-page]');
const pages = document.querySelectorAll('.page');
const root = document.documentElement;

const paper = (venue, title, tags, excerpt, url, note) => ({ venue, title, tags, excerpt, url, note });

const PORPOISE_PAPER = paper('Cancer Cell 2022', 'Pan-Cancer Integrative Histology-Genomic Analysis via Multimodal Deep Learning', ['PORPOISE', 'Histology Genomics', 'Prognosis'], 'A pan-cancer multimodal survival modeling framework that integrates whole-slide pathology images and molecular profiles to improve prognosis prediction and identify interpretable image-omic correlates of patient risk.', 'https://doi.org/10.1016/j.ccell.2022.07.004', {
  question: 'Can whole-slide pathology images and genomic profiles be jointly modeled to improve cancer prognosis and discover interpretable image-omic biomarkers?',
  method: 'Uses weakly supervised WSI modeling, molecular feature modeling, and multimodal fusion to predict survival risk across 14 cancer types.',
  value: 'A foundational reference for pathology-omics prognosis modeling and interpretable multimodal survival analysis.',
  caution: 'This paper is Cancer Cell rather than Nature Portfolio, but it is highly relevant as an image-omics benchmark and finished reading note.',
  noteFile: 'notes/porpoise.pdf',
  completed: true,
  completedDate: '2026-05-18',
  completedLabel: 'PDF note'
});

const OMICLIP_PAPER = paper('Nature Methods 2025', 'A Visual Omics Foundation Model to Bridge Histopathology with Spatial Transcriptomics', ['OmiCLIP', 'Loki', 'Spatial Transcriptomics'], 'A visual-omics foundation model and Loki platform that align H&E histology with spatial transcriptomics for tissue alignment, annotation, deconvolution, retrieval, and spatial gene-expression prediction.', 'https://www.nature.com/articles/s41592-025-02707-1', {
  question: 'Can routine H&E histology be aligned with spatial transcriptomics at scale?',
  method: 'Uses contrastive pretraining on paired histology patches and transcriptomic gene sentences from large-scale spatial transcriptomics data.',
  value: 'A central reference for Pathology Omics, histology-guided molecular inference, and visual-omics foundation modeling.',
  caution: 'Predicted spatial molecular maps should be interpreted as model-estimated molecular layers and validated against measured assays.',
  noteFile: 'notes/OmiCLIP.pdf',
  completed: true,
  completedDate: '2026-05-19',
  completedLabel: 'PDF note'
});

const STORM_PAPER = paper('arXiv 2026', 'A Multimodal Foundation Model of Spatial Transcriptomics and Histology for Biological Discovery and Clinical Prediction', ['STORM', 'Spatial Transcriptomics', 'Histology'], 'A spatial transcriptomics and histology foundation model trained on 1.2 million paired ST-H&E spots across 18 organs for spatial domain discovery, virtual ST prediction, and clinical outcome prediction.', 'https://arxiv.org/abs/2604.03630', {
  question: 'Can H&E and spatial transcriptomics be unified into a spatially aware foundation model for discovery and clinical prediction?',
  method: 'Uses hierarchical spot-level H&E and ST encoders plus a spatial encoder trained with multimodal masked pretraining.',
  value: 'Important for connecting morphology, spatial molecular context, virtual ST prediction, immunotherapy response, and patient outcomes.',
  caution: 'This is an arXiv work in progress, so final claims and benchmarking details should be updated after peer review.',
  noteFile: 'notes/STORM.pdf',
  completed: true,
  completedDate: '2026-05-19',
  completedLabel: 'PDF note'
});

const MULTIEMBED_PAPER = paper('Nature Methods 2026', 'Systematically Decoding Pathological Morphologies and Molecular Profiles with Unified Multimodal Embedding', ['Multi-Embed', 'Multimodal Embedding', 'Pathology Omics'], 'A unified and interpretable multimodal embedding framework for cross-modality inference and integration between multilevel pathological morphologies and multilayer molecular profiles.', 'https://www.nature.com/articles/s41592-026-03070-5', {
  question: 'Can pathology morphology and multilayer molecular profiles be aligned in a unified embedding space for inference and biological interpretation?',
  method: 'Uses morphology features from pathology tiles and molecular features from multi-omics data, aligned by self-supervised contrastive learning with reconstruction constraints.',
  value: 'A strong reference for morphology-to-molecule inference, multimodal integration, spatial clustering, prognosis modeling, and trajectory analysis.',
  caution: 'Cross-modality predictions should be checked across cancer types, molecular layers, external cohorts, and downstream clinical settings.',
  noteFile: 'notes/MultiEmbed.pdf',
  completed: true,
  completedDate: '2026-05-19',
  completedLabel: 'PDF note'
});


const topics = {
  'cbio-overview': {
    family: 'Computational Biology',
    tone: 'bio',
    title: 'Computational Biology Overview',
    subtitle: 'A compact map for single cell foundation models, multiomics integration, spatial omics, cell state dynamics, and perturbation biology.',
    note: 'This section is organized around reusable biological representation learning. The main reading question is whether a model only produces useful embeddings, or whether it also preserves interpretable biological structure such as cell state, regulatory program, spatial niche, and response to perturbation.',
    rows: [
      ['Cell Foundation Models', 'Large pretrained models for gene programs, cell states, atlas transfer, and perturbation reasoning.', 'cbio-foundation'],
      ['Multiomics Integration', 'Representation learning across RNA, chromatin, protein, spatial data, and partially observed modalities.', 'cbio-integration'],
      ['Spatial Omics', 'Models for tissue niches, spatial transcriptomics, spatial proteomics, and image-guided molecular inference.', 'cbio-spatial'],
      ['Cell State Dynamics', 'Trajectory inference, velocity, fate landscapes, and multimodal temporal structure.', 'cbio-dynamics'],
      ['Perturbation Biology', 'Gene perturbation, drug response, regulatory programs, and counterfactual cellular prediction.', 'cbio-perturbation']
    ],
    papers: []
  },
  'cbio-foundation': {
    family: 'Computational Biology',
    tone: 'bio',
    title: 'Cell Foundation Models',
    subtitle: 'Pretrained biological models that learn reusable representations of cells, genes, perturbations, and tissue context from large-scale atlases.',
    note: 'The initial reading angle is to compare how each foundation model defines a biological token, what pretraining task it uses, and whether transfer is evaluated on genuinely unseen tissues, cell types, disease states, or perturbations.',
    rows: [
      ['Biological tokens', 'Genes, expression ranks, cells, neighborhoods, and metadata tokens define what the model can reason about.', null],
      ['Pretraining objective', 'Masked prediction, autoregression, reconstruction, contrastive learning, and task-aware transfer shape the learned biology.', null],
      ['Transfer evidence', 'The key question is whether pretraining improves difficult settings rather than only in-distribution annotation.', null]
    ],
    papers: [
      paper('Nature Methods 2024', 'scGPT: Toward Building a Foundation Model for Single Cell Multiomics Using Generative AI', ['scGPT', 'Generative AI', 'Single Cell'], 'A generative foundation model pretrained on large single cell profiles for transfer across annotation, perturbation, and multiomic tasks.', 'https://www.nature.com/articles/s41592-024-02201-0', {
        question: 'Can a language-model style framework learn reusable cell and gene representations from large-scale single cell profiles?',
        method: 'Treats gene expression as a tokenized sequence and pretrains a transformer using generative objectives.',
        value: 'Useful as a reference point for single cell foundation modeling and transfer learning.',
        caution: 'Need to check how much gain comes from pretraining scale versus task-specific fine tuning.'
      }),
      paper('Nature 2023', 'Transfer Learning Enables Predictions in Network Biology', ['Geneformer', 'Network Biology', 'Transfer'], 'A context-aware transformer pretrained on single cell transcriptomes to predict gene network behavior under limited data settings.', 'https://www.nature.com/articles/s41586-023-06139-9', {
        question: 'Can a model pretrained on transcriptomes predict network regulators and disease-relevant gene programs?',
        method: 'Uses attention-based transfer learning over ranked gene expression information.',
        value: 'Important for connecting foundation models with regulatory biology rather than simple cell labeling.',
        caution: 'Network interpretation should be checked against perturbation and external biological evidence.'
      }),
      paper('Nature Methods 2025', 'Nicheformer: A Foundation Model for Single Cell and Spatial Omics', ['Nicheformer', 'Spatial Context', 'Foundation Model'], 'A foundation model trained on dissociated and spatially resolved cells to represent tissue niches and local cellular microenvironments.', 'https://www.nature.com/articles/s41592-025-02814-z', {
        question: 'How can cell foundation models encode spatial context instead of treating cells as isolated observations?',
        method: 'Pretrains a transformer on large single cell and targeted spatial transcriptomics collections.',
        value: 'Especially relevant for bridging single cell atlases with spatial tissue organization.',
        caution: 'The most important evaluation is transfer across platforms, organs, and tissue architectures.'
      }),
      paper('Nature Communications 2025', 'scPRINT: Pretraining on 50 Million Cells Allows Robust Cell Representation Learning', ['scPRINT', 'Cell Model', 'Atlas'], 'A large-scale cell model for robust cell representation learning and downstream biological prediction.', 'https://www.nature.com/articles/s41467-025-58699-1', {
        question: 'Does scaling the number of cells improve robustness and biological transfer?',
        method: 'Pretrains over a very large cell collection and evaluates representation quality across tasks.',
        value: 'Useful for understanding scaling behavior in single cell representation learning.',
        caution: 'Robustness should be separated from dataset overlap and annotation consistency.'
      })
    ]
  },
  'cbio-integration': {
    family: 'Computational Biology',
    tone: 'bio',
    title: 'Multiomics Integration',
    subtitle: 'Methods for aligning multiple molecular modalities while preserving shared biology, modality-specific signal, and downstream interpretability.',
    note: 'A good integration method should not only mix modalities. The note should ask what information is shared, what is private, whether pairing is required, and whether the integrated space improves real biological questions.',
    rows: [
      ['Shared signal', 'Identify which biological factors are assumed to be common across modalities.', null],
      ['Pairing design', 'Record whether the method supports paired, mosaic, partially paired, or unpaired observations.', null],
      ['Evaluation depth', 'Look beyond mixing scores and check cross-modal prediction, biological conservation, and temporal validity.', null]
    ],
    papers: [
      paper('Nature Biotechnology 2022', 'Multi Omics Single Cell Data Integration and Regulatory Inference with GLUE', ['GLUE', 'Unpaired Data', 'Regulatory Graph'], 'A graph-linked framework for integrating unpaired single cell multiomics and inferring regulatory interactions.', 'https://www.nature.com/articles/s41587-022-01284-4', {
        question: 'Can unpaired modalities be integrated while retaining regulatory interpretability?',
        method: 'Links omics-specific feature spaces through a guidance graph and joint embedding.',
        value: 'Strong baseline for unpaired RNA and ATAC integration with regulatory interpretation.',
        caution: 'Good alignment does not necessarily imply good temporal or causal modeling.'
      }),
      paper('Nature Methods 2023', 'MultiVI: Deep Generative Model for the Integration of Multimodal Data', ['MultiVI', 'VAE', 'Mosaic Data'], 'A probabilistic model for integrating multimodal single cell data with missing modalities and mosaic measurement designs.', 'https://www.nature.com/articles/s41592-023-01909-9', {
        question: 'How should a model represent cells when some modalities are missing?',
        method: 'Uses a deep generative model with modality-specific latent representations and joint integration.',
        value: 'Important for realistic single cell datasets where not every modality is measured everywhere.',
        caution: 'Imputation quality should be evaluated separately from visual embedding quality.'
      }),
      paper('Nature Biotechnology 2024', 'Mosaic Integration and Knowledge Transfer of Single Cell Multimodal Data', ['MIDAS', 'Mosaic Integration', 'Knowledge Transfer'], 'A deep probabilistic framework for integrating datasets that share only subsets of modalities.', 'https://www.nature.com/articles/s41587-023-02040-y', {
        question: 'Can knowledge transfer work when different datasets contain different modality combinations?',
        method: 'Models mosaic data using probabilistic latent variables and modality transfer.',
        value: 'Relevant for real multi-cohort studies where measurement designs are incomplete.',
        caution: 'Need to check whether transferred modalities preserve cell-type and disease-specific structure.'
      })
    ]
  },
  'cbio-spatial': {
    family: 'Computational Biology',
    tone: 'bio',
    title: 'Spatial Omics',
    subtitle: 'Spatial transcriptomics, spatial proteomics, tissue neighborhoods, molecular niches, and image-informed spatial learning.',
    note: 'Spatial omics papers should be read through three lenses: spatial resolution, molecular coverage, and whether the model captures tissue-level organization rather than only local smoothing.',
    rows: [
      ['Spatial reconstruction', 'Recover gene expression, cell composition, and tissue architecture from spatial assays.', null],
      ['Image guidance', 'Use histology to refine expression prediction, spot deconvolution, and spatial annotation.', null],
      ['Tissue niches', 'Model multicellular organization in immune, stromal, epithelial, and tumor compartments.', null]
    ],
    papers: [
      paper('Nature Biotechnology 2025', 'Standardized Metrics for Assessment and Reproducibility of Imaging Based Spatial Omics', ['Benchmark', 'Spatial Omics', 'Reproducibility'], 'A benchmarking and best-practice direction for evaluating imaging-based spatial omics data and computational methods.', 'https://www.nature.com/articles/s41587-025-02811-9', {
        question: 'How should spatial omics datasets and computational analyses be evaluated reproducibly?',
        method: 'Defines standardized metrics and comparisons for imaging-based spatial omics resources.',
        value: 'Useful as an evaluation checklist for spatial omics and histology omics methods.',
        caution: 'Metrics need to be matched to biological questions and platform resolution.'
      }),
      paper('Nature Methods 2025', 'A Visual Omics Foundation Model to Bridge Histopathology with Spatial Transcriptomics', ['OmiCLIP', 'Histology', 'Spatial Transcriptomics'], 'A visual omics foundation model linking tissue images with transcriptomic signals across organs.', 'https://www.nature.com/articles/s41592-025-02707-1', {
        question: 'Can histology images and spatial transcriptomes be aligned in a shared representation space?',
        method: 'Uses contrastive visual omics pretraining over paired tissue patches and gene-expression sentences.',
        value: 'Central paper for image-guided spatial omics and Pathology Omics modeling.',
        caution: 'Prediction maps should be interpreted as model estimates rather than direct molecular measurements.'
      }),
      paper('Nature Communications 2025', 'Single Cell and Spatially Resolved Omics Reveal Disease Microenvironments', ['Spatial Profiling', 'Microenvironment', 'Disease'], 'A representative disease-focused spatial omics study for connecting spatial cellular organization with molecular programs.', 'https://www.nature.com/articles/s41467-025-66706-8', {
        question: 'How do spatially organized molecular programs shape disease tissue states?',
        method: 'Combines single cell and spatial profiling to characterize disease microenvironments.',
        value: 'A useful template for biological interpretation of spatial multiomics.',
        caution: 'Generalization depends on cohort design, spatial platform, and tissue sampling.'
      })
    ]
  },
  'cbio-dynamics': {
    family: 'Computational Biology',
    tone: 'bio',
    title: 'Cell State Dynamics',
    subtitle: 'Trajectory inference, latent time, velocity, fate landscapes, and temporal modeling from static or time-resolved single cell data.',
    note: 'For dynamic models, the reading note should distinguish ordering from velocity, and both from actual causal transition. The key question is whether the model provides biologically interpretable temporal structure.',
    rows: [
      ['Latent time', 'Infer ordered biological progression from heterogeneous cell states.', null],
      ['Velocity models', 'Estimate transition directions using RNA, chromatin, or multimodal kinetics.', null],
      ['Fate landscapes', 'Model branching, terminal states, and lineage-specific regulatory programs.', null]
    ],
    papers: [
      paper('Nature Communications 2025', 'Inferring Differential Dynamics from Multi Lineage Multiomic and Multi Sample Single Cell Data with MultiVeloVAE', ['MultiVeloVAE', 'Velocity', 'Multiomics'], 'A probabilistic framework for multi-sample and multiomic velocity inference across lineages and partially overlapping modalities.', 'https://www.nature.com/articles/s41467-025-66287-6', {
        question: 'Can velocity models compare dynamic parameters across lineages, samples, and modalities?',
        method: 'Uses variational Bayesian inference to place chromatin and RNA dynamics on a shared time scale.',
        value: 'Highly relevant for ATLAS-style lag and temporal modeling.',
        caution: 'Velocity depends on kinetic assumptions and needs careful lineage and root interpretation.'
      }),
      paper('Nature Communications 2025', 'GraphVelo Allows Accurate Inference of Multimodal Velocities and Molecular Mechanisms for Single Cells', ['GraphVelo', 'Multimodal Velocity', 'Mechanism'], 'A graph-based approach for multimodal velocity and molecular mechanism inference.', 'https://www.nature.com/articles/s41467-025-67259-6', {
        question: 'Can graph structure improve velocity estimation and molecular mechanism discovery?',
        method: 'Combines neighborhood graph learning with multimodal signals to infer transition behavior.',
        value: 'Useful for comparing dynamic graph models with latent-time based approaches.',
        caution: 'Graph construction can strongly affect inferred direction and downstream interpretation.'
      }),
      paper('Nature Biotechnology 2025', 'Deep Learning Based Gene Perturbation Effect Prediction Using Single Cell Data', ['Perturbation', 'Dynamics', 'Prediction'], 'A perturbation prediction paper that is useful for reading dynamic response as a state transition problem.', 'https://www.nature.com/articles/s41592-025-02772-6', {
        question: 'Can models predict how cell states move after perturbation?',
        method: 'Learns perturbation effects from single cell data and evaluates generalization to unseen settings.',
        value: 'Connects trajectory thinking with intervention response.',
        caution: 'Check whether unseen perturbations are truly out of distribution.'
      })
    ]
  },
  'cbio-perturbation': {
    family: 'Computational Biology',
    tone: 'bio',
    title: 'Perturbation Biology',
    subtitle: 'Models that learn how cells respond to gene perturbation, drug treatment, environmental changes, and regulatory intervention.',
    note: 'Perturbation papers are most useful when they separate correlation, prediction, and mechanism. The note should record experimental design, control cells, unseen perturbation setting, and whether the model can produce biologically testable hypotheses.',
    rows: [
      ['Perturbation prediction', 'Predict unseen responses across genes, drugs, doses, cell types, and donors.', null],
      ['Regulatory programs', 'Infer gene modules, regulatory networks, and mechanistic response signatures.', null],
      ['Counterfactual biology', 'Estimate response under interventions that were not experimentally measured.', null]
    ],
    papers: [
      paper('Nature Methods 2025', 'Deep Learning Based Gene Perturbation Effect Prediction Using Single Cell Data', ['Perturbation', 'Single Cell', 'Prediction'], 'A method-focused paper for predicting gene perturbation effects from single cell measurements.', 'https://www.nature.com/articles/s41592-025-02772-6', {
        question: 'Can single cell models predict the molecular consequence of unseen perturbations?',
        method: 'Uses deep learning to map perturbation identity and cellular context to response profiles.',
        value: 'A practical reference for perturbation response prediction and benchmark design.',
        caution: 'Need to check split design carefully to avoid overly easy gene or cell-type leakage.'
      }),
      paper('Nature 2023', 'Transfer Learning Enables Predictions in Network Biology', ['Geneformer', 'Regulatory Network', 'Therapeutic Target'], 'A foundation model paper that uses transfer learning for network biology and candidate regulator discovery.', 'https://www.nature.com/articles/s41586-023-06139-9', {
        question: 'Can pretrained single cell models help discover gene regulators and therapeutic targets?',
        method: 'Fine tunes a pretrained transformer for network biology tasks with limited data.',
        value: 'Connects perturbation-style reasoning with large-scale pretraining.',
        caution: 'Predicted regulators require experimental or external biological validation.'
      }),
      paper('Nature Communications 2025', 'scPRINT: Pretraining on 50 Million Cells Allows Robust Cell Representation Learning', ['Cell Model', 'Regulation', 'Transfer'], 'A large cell model that is useful for evaluating whether pretraining supports perturbation and gene program analysis.', 'https://www.nature.com/articles/s41467-025-58699-1', {
        question: 'Does large-scale pretraining produce representations that support perturbation analysis?',
        method: 'Learns general cell embeddings from massive cell collections.',
        value: 'Good comparison point for foundation models used in perturbation settings.',
        caution: 'Interpretability of learned gene relationships should be tested carefully.'
      })
    ]
  },
  'path-overview': {
    family: 'Computational Pathology',
    tone: 'path',
    title: 'Computational Pathology Overview',
    subtitle: 'A refined map for pathology foundation models, pathology language models, agents, segmentation, clinical prediction, and reliable deployment.',
    note: 'This section treats pathology AI as more than slide classification. It emphasizes representation scale, whole-slide context, language grounding, evidence localization, agentic workflows, and clinical reliability.',
    rows: [
      ['Pathology Foundation Models', 'Whole slide and tile-level pretraining for diagnosis, prognosis, biomarkers, and pan-cancer transfer.', 'path-foundation'],
      ['Pathology Language Models', 'Image text alignment, pathology copilots, report reasoning, and question answering.', 'path-language'],
      ['Pathology Agents', 'Agentic workflows for concept discovery, tool use, hypothesis generation, and research assistance.', 'path-agent'],
      ['Pathology Segmentation', 'Nuclei, tissue regions, tumor localization, promptable masks, and reasoning-guided evidence.', 'path-segmentation'],
      ['Clinical Prediction', 'Diagnosis, prognosis, grading, biomarkers, molecular status, and therapy response.', 'path-clinical'],
      ['Reliable Pathology AI', 'Domain shift, stain variation, uncertainty, external validation, and deployment.', 'path-reliability']
    ],
    papers: []
  },
  'path-foundation': {
    family: 'Computational Pathology',
    tone: 'path',
    title: 'Pathology Foundation Models',
    subtitle: 'Large-scale pretrained pathology models for whole-slide representation, cancer diagnosis, prognosis, biomarker prediction, and rare cancer detection.',
    note: 'For pathology foundation models, the key reading dimensions are pretraining scale, whether slide-level context is modeled, how external validation is designed, and whether the representation transfers beyond the original cancer types.',
    rows: [
      ['Pretraining scale', 'Record slide count, patch count, tissue coverage, magnification, and supervision source.', null],
      ['Whole slide context', 'Distinguish patch-level feature extraction from slide-level and patient-level reasoning.', null],
      ['Clinical transfer', 'Focus on cross-institution validation, rare cancer detection, biomarker prediction, and prognosis.', null]
    ],
    papers: [
      paper('Nature Medicine 2024', 'Towards a General Purpose Foundation Model for Computational Pathology', ['UNI', 'Self Supervision', 'Transfer'], 'A general-purpose pathology foundation model evaluated across a broad range of diagnostic and biological tasks.', 'https://www.nature.com/articles/s41591-024-02857-3', {
        question: 'Can one self-supervised pathology encoder transfer across many tissue and disease tasks?',
        method: 'Pretrains a vision transformer on very large histology patch collections.',
        value: 'A core baseline for feature extraction and pathology representation learning.',
        caution: 'Downstream performance depends heavily on aggregation and task-specific evaluation.'
      }),
      paper('Nature 2024', 'A Whole Slide Foundation Model for Digital Pathology from Real World Data', ['Prov GigaPath', 'Whole Slide', 'Real World Data'], 'A whole-slide foundation model trained from real-world digital pathology data with slide-scale representation learning.', 'https://www.nature.com/articles/s41586-024-07441-w', {
        question: 'How much does whole-slide scale and real-world data improve pathology representation learning?',
        method: 'Uses large-scale pretraining over real-world slides and learns slide-level representations.',
        value: 'Important for moving beyond isolated patch encoders toward WSI-level modeling.',
        caution: 'Real-world scale is powerful but requires careful assessment of cohort and site bias.'
      }),
      paper('Nature Medicine 2024', 'A Foundation Model for Clinical Grade Computational Pathology and Rare Cancers Detection', ['Virchow', 'Clinical Grade', 'Rare Cancer'], 'A clinical-grade pathology foundation model trained on a very large WSI collection and tested for rare cancer detection.', 'https://www.nature.com/articles/s41591-024-03141-0', {
        question: 'Can pathology foundation models improve rare cancer detection and clinical-grade downstream tasks?',
        method: 'Scales self-supervised pathology pretraining over large clinical slide collections.',
        value: 'A key reference for clinical transfer and rare disease performance.',
        caution: 'Rare cancer evaluation should be examined for prevalence, annotation quality, and external validation.'
      }),
      paper('Nature 2024', 'A Pathology Foundation Model for Cancer Diagnosis and Prognosis Prediction', ['CHIEF', 'Diagnosis', 'Prognosis'], 'A pan-cancer pathology foundation model for diagnosis, molecular characterization, and prognosis prediction.', 'https://www.nature.com/articles/s41586-024-07894-z', {
        question: 'Can one pathology foundation model support cancer diagnosis, molecular prediction, and prognosis?',
        method: 'Learns generalizable pathology image features and evaluates across multiple cancer tasks.',
        value: 'Very relevant for linking morphology with phenotype and clinical outcome.',
        caution: 'Need to separate representation strength from task-specific clinical label quality.'
      }),
      paper('Nature Medicine 2025', 'A Multimodal Whole Slide Foundation Model for Pathology', ['TITAN', 'Multimodal', 'Whole Slide'], 'A multimodal WSI foundation model for diagnosis, prognosis, and biomarker-related pathology tasks.', 'https://www.nature.com/articles/s41591-025-03982-3', {
        question: 'Can multimodal pretraining improve WSI-level pathology representations?',
        method: 'Combines whole-slide modeling with multimodal supervision and patient-level prediction.',
        value: 'Important for future Pathology Omics systems that fuse images, text, and molecular signals.',
        caution: 'Need to check which modality contributes to each downstream gain.'
      })
    ]
  },
  'path-language': {
    family: 'Computational Pathology',
    tone: 'path',
    title: 'Pathology Language Models',
    subtitle: 'Models that connect histology images with captions, reports, questions, answers, and interpretable diagnostic reasoning.',
    note: 'Language in pathology can provide supervision, explanation, retrieval, and interaction. The note should distinguish image text alignment, report generation, visual question answering, and interactive copilot behavior.',
    rows: [
      ['Image text alignment', 'Learn pathology semantics by pairing histology images with captions, concepts, or reports.', null],
      ['Interactive reasoning', 'Support pathology question answering, differential diagnosis, and visual explanation.', null],
      ['Evidence grounding', 'Connect generated language with slide regions and morphological evidence.', null]
    ],
    papers: [
      paper('Nature Medicine 2024', 'A Visual Language Foundation Model for Computational Pathology', ['CONCH', 'Image Text', 'Retrieval'], 'A contrastive visual-language foundation model trained from diverse histopathology image caption pairs.', 'https://www.nature.com/articles/s41591-024-02856-4', {
        question: 'Can paired histology images and captions produce transferable pathology semantics?',
        method: 'Uses contrastive image text pretraining over large pathology image-caption collections.',
        value: 'A key baseline for retrieval, zero-shot learning, and language-grounded pathology.',
        caution: 'Caption quality and concept coverage shape the boundaries of zero-shot behavior.'
      }),
      paper('Nature 2024', 'A Multimodal Generative AI Copilot for Human Pathology', ['PathChat', 'Copilot', 'Question Answering'], 'A pathology copilot that combines a pathology vision encoder with a large language model for interactive visual-language tasks.', 'https://www.nature.com/articles/s41586-024-07618-3', {
        question: 'Can a multimodal language model assist users with diverse pathology visual reasoning tasks?',
        method: 'Adapts a pathology vision encoder and fine tunes with large visual-language instruction data.',
        value: 'Highly relevant for reasoning segmentation and pathology assistant design.',
        caution: 'Clinical use requires strong evidence grounding, uncertainty handling, and expert oversight.'
      }),
      paper('Nature Medicine 2023', 'A Visual Language Foundation Model for Pathology Image Analysis Using Medical Twitter', ['PLIP', 'Social Data', 'Zero Shot'], 'An early pathology image text model using public social-media image text pairs for pathology analysis.', 'https://www.nature.com/articles/s41591-023-02504-3', {
        question: 'Can public image text pairs teach pathology visual concepts?',
        method: 'Trains a vision-language model with pathology image text data from social media.',
        value: 'Useful historical reference for pathology VLM pretraining data design.',
        caution: 'Social-media data may be noisy and biased toward educational examples.'
      }),
      paper('Nature Medicine 2025', 'A Multimodal Whole Slide Foundation Model for Pathology', ['TITAN', 'Whole Slide', 'Multimodal'], 'A WSI-level multimodal model that helps connect pathology representation learning with broader multimodal reasoning.', 'https://www.nature.com/articles/s41591-025-03982-3', {
        question: 'How can whole-slide representations be integrated with multimodal signals?',
        method: 'Builds a WSI-level foundation model for multimodal pathology prediction.',
        value: 'A bridge from image text models to patient-level pathology intelligence.',
        caution: 'The exact contribution of each modality should be evaluated task by task.'
      })
    ]
  },
  'path-agent': {
    family: 'Computational Pathology',
    tone: 'path',
    title: 'Pathology Agents',
    subtitle: 'Agentic systems that use language, foundation models, retrieval, segmentation, measurement, and tool execution for pathology research.',
    note: 'Pathology agents should be evaluated as workflows, not only as models. The note should record how the agent plans, calls tools, verifies evidence, and communicates uncertainty to human experts.',
    rows: [
      ['Concept discovery', 'Generate biologically meaningful tissue concepts rather than only predicting labels.', null],
      ['Tool workflows', 'Combine retrieval, localization, segmentation, statistics, and report drafting.', null],
      ['Human oversight', 'Track pathologist review, failure modes, reproducibility, and safety constraints.', null]
    ],
    papers: [
      paper('Nature Medicine 2026', 'An Agentic Framework for Autonomous Scientific Discovery in Cancer Pathology', ['SPARK', 'Agent', 'Discovery'], 'An agentic framework for pathology concept discovery and autonomous scientific analysis in cancer pathology.', 'https://www.nature.com/articles/s41591-026-04357-y', {
        question: 'Can an agent discover and operationalize meaningful pathology concepts for cancer research?',
        method: 'Combines foundation models, language-guided concept generation, and tool-based analysis.',
        value: 'A key reference for agentic pathology and future AI research assistants.',
        caution: 'Generated concepts need human verification and robust reproducibility testing.'
      }),
      paper('Nature 2024', 'A Multimodal Generative AI Copilot for Human Pathology', ['PathChat', 'Copilot', 'Interactive AI'], 'A pathology copilot that motivates agent-style interaction even when it is not a fully autonomous agent.', 'https://www.nature.com/articles/s41586-024-07618-3', {
        question: 'What does a useful human-facing pathology assistant need to understand?',
        method: 'Fine tunes a multimodal model for pathology conversation and visual reasoning.',
        value: 'A practical reference for designing interfaces between pathologists and AI systems.',
        caution: 'Dialogue fluency should not be confused with verified diagnostic reliability.'
      }),
      paper('Nature Communications 2025', 'A Multimodal Knowledge Enhanced Whole Slide Pathology Foundation Model', ['Knowledge Enhanced', 'Whole Slide', 'Reasoning'], 'A knowledge-enhanced direction for WSI modeling that supports more structured pathology reasoning.', 'https://www.nature.com/articles/s41467-025-66220-x', {
        question: 'Can external knowledge improve WSI representation and reasoning?',
        method: 'Integrates knowledge-enhanced modeling with whole-slide pathology representation.',
        value: 'Relevant for agent systems that need retrieval and structured biomedical knowledge.',
        caution: 'Knowledge quality, update mechanisms, and hallucination control are critical.'
      })
    ]
  },
  'path-segmentation': {
    family: 'Computational Pathology',
    tone: 'path',
    title: 'Pathology Segmentation',
    subtitle: 'Nuclei segmentation, tissue region localization, promptable masks, and reasoning-guided evidence extraction.',
    note: 'Segmentation papers should be read not only by Dice or IoU. For pathology, it matters whether masks are biologically meaningful, clinically aligned, stain robust, and connected to downstream reasoning.',
    rows: [
      ['Nuclei structure', 'Instance segmentation and cell classification for microenvironment and morphology analysis.', null],
      ['Region evidence', 'Tumor region localization, weak supervision, attention maps, and pathologist-verifiable regions.', null],
      ['Reasoning masks', 'Explain the object and evidence before producing a mask or region-level output.', null]
    ],
    papers: [
      paper('Nature Medicine 2024', 'A Visual Language Foundation Model for Computational Pathology', ['CONCH', 'Evidence', 'Localization'], 'Although primarily a VLM paper, it is important for language-grounded localization and region-level evidence design.', 'https://www.nature.com/articles/s41591-024-02856-4', {
        question: 'Can pathology concepts be aligned with image regions through image text supervision?',
        method: 'Learns image text representations that support retrieval and zero-shot concept matching.',
        value: 'Useful foundation for reasoning-guided segmentation and referring pathology tasks.',
        caution: 'Localization from contrastive models requires additional validation.'
      }),
      paper('Nature 2024', 'A Multimodal Generative AI Copilot for Human Pathology', ['PathChat', 'Visual Reasoning', 'Evidence'], 'A pathology assistant direction that motivates segmentation as evidence for generated answers.', 'https://www.nature.com/articles/s41586-024-07618-3', {
        question: 'When a model answers a pathology question, can it also identify visual evidence?',
        method: 'Builds an interactive MLLM over pathology images and natural language instructions.',
        value: 'Relevant to reasoning segmentation where answer generation and mask output are coupled.',
        caution: 'Mask timing and evidence grounding need explicit evaluation beyond conversation quality.'
      }),
      paper('Nature Biomedical Engineering 2025', 'Benchmarking Foundation Models as Feature Extractors for Weakly Supervised Computational Pathology', ['Benchmark', 'Weak Supervision', 'Feature Extraction'], 'A benchmark for foundation model features that is useful for region-level and weakly supervised pathology pipelines.', 'https://www.nature.com/articles/s41551-025-01516-3', {
        question: 'Which pretrained pathology features work reliably in weakly supervised WSI tasks?',
        method: 'Benchmarks foundation models as feature extractors under weak supervision.',
        value: 'Useful for selecting encoders before segmentation or MIL evidence modeling.',
        caution: 'Feature extractor benchmarks may not predict performance in dense mask tasks.'
      })
    ]
  },
  'path-clinical': {
    family: 'Computational Pathology',
    tone: 'path',
    title: 'Clinical Prediction',
    subtitle: 'Cancer diagnosis, tumor typing, prognosis, molecular biomarkers, treatment response, and patient-level outcome prediction from pathology images.',
    note: 'Clinical prediction notes should always record the target label, patient cohort, validation setting, censoring or outcome design, and whether predictions are interpretable enough for clinical discussion.',
    rows: [
      ['Diagnosis', 'Cancer detection, tumor type, subtype classification, grading, and triage.', null],
      ['Prognosis', 'Survival, recurrence risk, treatment benefit, and patient-level aggregation.', null],
      ['Biomarkers', 'Mutation status, MSI, expression programs, immune phenotype, and therapy response.', null]
    ],
    papers: [
      PORPOISE_PAPER,
      paper('Nature 2024', 'A Pathology Foundation Model for Cancer Diagnosis and Prognosis Prediction', ['CHIEF', 'Cancer', 'Outcome'], 'A pan-cancer model for diagnosis, molecular characterization, and prognosis prediction.', 'https://www.nature.com/articles/s41586-024-07894-z', {
        question: 'Can one pathology foundation model support diagnosis and survival-related prediction across cancers?',
        method: 'Uses foundation model representations for multiple downstream cancer tasks.',
        value: 'Central reference for linking morphology with cancer phenotype and outcome.',
        caution: 'Outcome labels and treatment confounding should be examined carefully.'
      }),
      paper('Nature Medicine 2024', 'A Foundation Model for Clinical Grade Computational Pathology and Rare Cancers Detection', ['Virchow', 'Rare Cancer', 'Clinical'], 'A large pathology foundation model with rare cancer and clinical-grade downstream evaluation.', 'https://www.nature.com/articles/s41591-024-03141-0', {
        question: 'Can foundation models improve rare cancer detection and clinical prediction robustness?',
        method: 'Scales pretraining on clinical whole-slide images and evaluates specialized tasks.',
        value: 'Important for clinical-grade and rare-disease computational pathology.',
        caution: 'Rare cancer performance should be interpreted with cohort details and confidence intervals.'
      }),
      paper('Nature Medicine 2025', 'Real World Deployment of a Fine Tuned Pathology Foundation Model', ['Deployment', 'Real World', 'Validation'], 'A deployment-focused study for evaluating pathology models in real clinical workflows.', 'https://www.nature.com/articles/s41591-025-03780-x', {
        question: 'How does a pathology foundation model behave in a real-world deployment environment?',
        method: 'Fine tunes and evaluates a pathology model under practical clinical workflow constraints.',
        value: 'Useful for understanding the gap between benchmark performance and deployment value.',
        caution: 'Deployment success depends on workflow integration and prospective evaluation.'
      }),
      paper('Nature Medicine 2025', 'A Multimodal Whole Slide Foundation Model for Pathology', ['TITAN', 'Biomarker', 'Patient Level'], 'A multimodal WSI model relevant for diagnosis, prognosis, and biomarker prediction.', 'https://www.nature.com/articles/s41591-025-03982-3', {
        question: 'Can multimodal WSI modeling improve patient-level clinical prediction?',
        method: 'Learns multimodal whole-slide representations for downstream pathology tasks.',
        value: 'Strong reference for patient-level foundation models.',
        caution: 'Must inspect how patient aggregation and modality fusion are implemented.'
      })
    ]
  },
  'path-reliability': {
    family: 'Computational Pathology',
    tone: 'path',
    title: 'Reliable Pathology AI',
    subtitle: 'Domain shift, stain variation, scanner bias, uncertainty, calibration, external validation, and clinical deployment.',
    note: 'Reliability is the difference between a strong benchmark model and a usable clinical model. Read these papers by tracking external validation, calibration, dataset shift, and whether failure modes are visible to users.',
    rows: [
      ['Domain shift', 'Stain, scanner, institution, tissue processing, cohort, and demographic differences.', null],
      ['Uncertainty', 'Calibration, confidence, abstention, and out-of-distribution behavior.', null],
      ['Deployment', 'Workflow integration, clinical reporting, pathologist interaction, and regulatory readiness.', null]
    ],
    papers: [
      paper('Nature Biomedical Engineering 2025', 'Benchmarking Foundation Models as Feature Extractors for Weakly Supervised Computational Pathology', ['Benchmark', 'Reliability', 'External Evaluation'], 'A systematic benchmark for assessing pretrained pathology models as feature extractors.', 'https://www.nature.com/articles/s41551-025-01516-3', {
        question: 'Which foundation models are reliable feature extractors under weak supervision?',
        method: 'Compares public pathology foundation models across weakly supervised tasks.',
        value: 'Useful for practical model selection and fair comparison.',
        caution: 'Feature extraction performance does not cover all deployment risks.'
      }),
      paper('Nature Communications 2025', 'A Clinical Benchmark of Public Self Supervised Pathology Foundation Models', ['Clinical Benchmark', 'Self Supervision', 'External Validation'], 'A clinical benchmark for public self-supervised pathology foundation models.', 'https://www.nature.com/articles/s41467-025-58796-1', {
        question: 'How do public pathology foundation models perform under clinical benchmark settings?',
        method: 'Evaluates self-supervised models across clinically relevant tasks.',
        value: 'Important for model selection and reproducible comparison.',
        caution: 'Benchmark composition can strongly affect model ranking.'
      }),
      paper('Nature Medicine 2025', 'Real World Deployment of a Fine Tuned Pathology Foundation Model', ['Deployment', 'Clinical Workflow', 'Validation'], 'A real-world deployment paper that helps evaluate clinical readiness and workflow impact.', 'https://www.nature.com/articles/s41591-025-03780-x', {
        question: 'What changes when pathology AI leaves benchmark datasets and enters clinical workflow?',
        method: 'Studies a fine-tuned foundation model in a real deployment context.',
        value: 'Essential for thinking about reliability beyond leaderboard scores.',
        caution: 'Deployment results should be read with local workflow and population context.'
      })
    ]
  },
  'bridge-overview': {
    family: 'Pathology Omics',
    tone: 'bridge',
    title: 'Pathology Omics Overview',
    subtitle: 'A bridge between tissue morphology and molecular regulation, covering histology spatial omics, visual omics models, molecular prediction, and spatial oncology.',
    note: 'This section is closest to Path Omics AI. The central question is how tissue morphology, spatial organization, and molecular state can be represented together in a way that supports interpretable cancer diagnosis and biological discovery.',
    rows: [
      ['Histology Spatial Omics', 'Use histology to predict, align, or interpret spatial transcriptomic and proteomic patterns.', 'bridge-histology'],
      ['Visual Omics Models', 'Pretrain models with pathology images and molecular profiles for biologically meaningful slide embeddings.', 'bridge-visualomics'],
      ['Molecular Prediction', 'Predict mutations, expression programs, pathway activity, protein expression, and treatment response from tissue morphology.', 'bridge-molecular'],
      ['Spatial Oncology', 'Connect tumor morphology with immune niches, stromal remodeling, plasticity, and spatial programs.', 'bridge-oncology']
    ],
    papers: []
  },
  'bridge-histology': {
    family: 'Pathology Omics',
    tone: 'bridge',
    title: 'Histology Spatial Omics',
    subtitle: 'Methods that align routine histology with spatial transcriptomics or spatial proteomics to recover molecular context from tissue morphology.',
    note: 'The most important reading question is whether predicted spatial molecular maps are evaluated as biological hypotheses or treated as direct measurements. This distinction matters for downstream cancer interpretation.',
    rows: [
      ['Expression prediction', 'Predict spatial gene expression or pathway activity from matched histology.', null],
      ['Cross-modal alignment', 'Align image patches, spots, cells, and molecular profiles in a shared representation space.', null],
      ['Spatial interpretation', 'Use morphology to understand molecular niches and tissue programs.', null]
    ],
    papers: [
      paper('arXiv 2026', 'A Multimodal Foundation Model of Spatial Transcriptomics and Histology for Biological Discovery and Clinical Prediction', ['STORM', 'Spatial Transcriptomics', 'Histology'], 'A spatial transcriptomics and histology foundation model trained on 1.2 million paired ST-H&E spots across 18 organs for spatial domain discovery, virtual ST prediction, and clinical outcome prediction.', 'https://arxiv.org/abs/2604.03630', {
        question: 'Can matched H&E and spatial transcriptomics be unified into a foundation model for biological discovery and clinical prediction?',
        method: 'Uses a hierarchical architecture with spot-level H&E and ST encoders plus a spatial encoder, trained with multimodal masked pretraining over paired ST-H&E data.',
        value: 'Important for Pathology Omics because it connects morphology, spatial molecular context, virtual ST prediction, and patient-level outcome modeling.',
        caution: 'This is currently an arXiv work-in-progress, so benchmark details, claims, and final publication status should be updated later.'
      }),
      paper('Nature Methods 2026', 'Systematically Decoding Pathological Morphologies and Molecular Profiles with Unified Multimodal Embedding', ['Multi-Embed', 'Multimodal Embedding', 'Pathology Omics'], 'A unified and interpretable multimodal embedding framework for cross-modality inference and integration between multilevel pathological morphologies and multilayer molecular profiles.', 'https://www.nature.com/articles/s41592-026-03070-5', {
        question: 'Can pathology morphology and multilayer molecular profiles be aligned in a unified embedding space for inference and biological interpretation?',
        method: 'Uses morphology features from pathology tiles and molecular features from multi-omics data, then aligns modalities through self-supervised contrastive learning with reconstruction constraints.',
        value: 'A strong reference for systematic morphology-to-molecule inference, multimodal integration, spatial clustering, prognosis modeling, and trajectory analysis.',
        caution: 'The interpretation of cross-modality predictions should be checked carefully across cancer types, molecular layers, and external cohorts.'
      }),     
      paper('Cancer Cell 2022', 'Pan-Cancer Integrative Histology-Genomic Analysis via Multimodal Deep Learning', ['PORPOISE', 'Histology Genomics', 'Prognosis'], 'A pan-cancer multimodal survival modeling framework that integrates whole-slide histology images and molecular profiles to improve prognosis prediction and identify image-omic correlates of patient risk.', 'https://doi.org/10.1016/j.ccell.2022.07.004', {
        question: 'Can whole-slide pathology images and genomic profiles be jointly modeled to improve cancer prognosis and discover interpretable image-omic biomarkers?',
        method: 'Uses weakly supervised WSI modeling, molecular feature modeling, and multimodal fusion to predict survival risk across 14 cancer types.',
        value: 'A foundational reference for pathology-omics prognosis modeling and interpretable multimodal survival analysis.',
        caution: 'This paper is published in Cancer Cell rather than Nature Portfolio, so keep or remove it depending on whether this list is strictly Nature-only.'
      }),
      paper('Nature Methods 2025', 'A Visual Omics Foundation Model to Bridge Histopathology with Spatial Transcriptomics', ['OmiCLIP', 'Loki', 'Spatial Transcriptomics'], 'A visual omics foundation model and platform for alignment, annotation, deconvolution, retrieval, and spatial gene expression prediction.', 'https://www.nature.com/articles/s41592-025-02707-1', {
        question: 'Can routine histology be aligned with spatial transcriptomics at scale?',
        method: 'Uses contrastive pretraining on paired histology patches and transcriptomic gene sentences.',
        value: 'A central reference for Pathology Omics and histology-guided molecular inference.',
        caution: 'Spatial gene prediction should be validated and interpreted as an estimated molecular layer.'
      }),
      paper('Nature Methods 2026', 'HESpotEx: A Dual Stream Deep Learning Framework for Spot Level Expression Prediction', ['Histology', 'Expression Prediction', 'Spatial Data'], 'A dual-stream framework for spot-level expression prediction from histology and spatial transcriptomics context.', 'https://www.nature.com/articles/s43588-026-00992-0', {
        question: 'Can histology and spatial neighborhood information jointly improve spot-level expression prediction?',
        method: 'Uses a dual-stream architecture to combine image and spatial expression context.',
        value: 'Useful for evaluating morphology-driven gene expression prediction.',
        caution: 'Performance should be checked across organs, platforms, and external tissue cohorts.'
      }),
      paper('Nature Biotechnology 2025', 'Standardized Metrics for Assessment and Reproducibility of Imaging Based Spatial Omics', ['Metrics', 'Reproducibility', 'Spatial Omics'], 'A reproducibility-focused paper for evaluating imaging-based spatial omics resources and analyses.', 'https://www.nature.com/articles/s41587-025-02811-9', {
        question: 'How should imaging-based spatial omics analysis be measured and compared?',
        method: 'Defines standardized metrics and reproducibility guidance.',
        value: 'A useful companion for evaluating histology spatial omics papers.',
        caution: 'Metrics should be aligned with biological goals, not optimized in isolation.'
      })
    ]
  },
  'bridge-visualomics': {
    family: 'Pathology Omics',
    tone: 'bridge',
    title: 'Visual Omics Models',
    subtitle: 'Foundation models trained with image and molecular supervision to make slide embeddings biologically meaningful and clinically useful.',
    note: 'Visual omics models should be evaluated by whether molecular supervision changes the representation in an interpretable way, and whether that change improves diagnosis, prognosis, or treatment response.',
    rows: [
      ['Molecular supervision', 'Use genomic, transcriptomic, or proteomic targets to shape pathology representations.', null],
      ['Slide embeddings', 'Develop representations that preserve both tissue morphology and molecular programs.', null],
      ['Biological transfer', 'Evaluate transfer to mutation, expression, prognosis, and therapy response tasks.', null]
    ],
    papers: [
      paper('Nature Methods 2025', 'A Visual Omics Foundation Model to Bridge Histopathology with Spatial Transcriptomics', ['OmiCLIP', 'Visual Omics', 'Contrastive Learning'], 'A direct visual omics model integrating histology images and transcriptomic signals.', 'https://www.nature.com/articles/s41592-025-02707-1', {
        question: 'Can image and omics contrastive learning create a shared biological representation?',
        method: 'Pairs H and E image patches with transcriptome-derived textual representations.',
        value: 'Strong foundation for visual omics representation learning.',
        caution: 'The representation may capture organ and technical signals unless carefully controlled.'
      }),
      paper('Nature Medicine 2025', 'A Multimodal Whole Slide Foundation Model for Pathology', ['TITAN', 'Multimodal', 'Whole Slide'], 'A WSI-level multimodal model that connects image representation with broader clinical and molecular tasks.', 'https://www.nature.com/articles/s41591-025-03982-3', {
        question: 'Can whole-slide models integrate multiple information sources for patient-level prediction?',
        method: 'Learns multimodal whole-slide representations for downstream pathology tasks.',
        value: 'Important for future slide omics and patient-level fusion models.',
        caution: 'Need to inspect whether molecular prediction depends on confounded cancer-type signals.'
      }),
      paper('Nature Communications 2025', 'A Multimodal Knowledge Enhanced Whole Slide Pathology Foundation Model', ['Knowledge Enhanced', 'Multimodal', 'Whole Slide'], 'A knowledge-enhanced WSI foundation model direction for integrating pathology representation with structured information.', 'https://www.nature.com/articles/s41467-025-66220-x', {
        question: 'Can biomedical knowledge make WSI representations more interpretable and transferable?',
        method: 'Combines WSI modeling with knowledge-enhanced multimodal representation learning.',
        value: 'Relevant for Pathology Omics systems with retrieval and biological priors.',
        caution: 'Knowledge integration needs careful validation to avoid superficial semantic matching.'
      })
    ]
  },
  'bridge-molecular': {
    family: 'Pathology Omics',
    tone: 'bridge',
    title: 'Molecular Prediction',
    subtitle: 'Prediction of mutation status, expression programs, pathway activity, protein expression, immune phenotype, and treatment response from tissue morphology.',
    note: 'Molecular prediction from histology is powerful but easy to overstate. The note should check whether the target is genuinely molecular, whether cancer type is a confounder, and whether spatial evidence supports the prediction.',
    rows: [
      ['Genomic status', 'Predict mutation, MSI, copy number alteration, and tumor origin from morphology.', null],
      ['Expression programs', 'Infer transcriptomic modules, pathway activity, and cell-state programs.', null],
      ['Treatment response', 'Connect morphology and molecular features to therapy benefit.', null]
    ],
    papers: [
      PORPOISE_PAPER,
      paper('Nature 2024', 'A Pathology Foundation Model for Cancer Diagnosis and Prognosis Prediction', ['CHIEF', 'Molecular Characterization', 'Outcome'], 'A pan-cancer foundation model with molecular characterization and prognosis-related tasks.', 'https://www.nature.com/articles/s41586-024-07894-z', {
        question: 'Can general pathology features predict molecular and clinical phenotypes?',
        method: 'Uses foundation model representations for diagnosis, molecular, and outcome prediction.',
        value: 'A major anchor for morphology phenotype molecular links.',
        caution: 'Need to control for cancer type and dataset-specific shortcuts.'
      }),
      paper('Nature Medicine 2025', 'A Multimodal Whole Slide Foundation Model for Pathology', ['TITAN', 'Biomarker', 'Patient Level'], 'A multimodal WSI model relevant to biomarker and patient-level prediction.', 'https://www.nature.com/articles/s41591-025-03982-3', {
        question: 'Can multimodal whole-slide learning improve biomarker prediction?',
        method: 'Learns WSI representations with multimodal training and evaluates patient-level tasks.',
        value: 'Useful for designing models that combine pathology with molecular data.',
        caution: 'Biomarker prediction should be tested on external cohorts with matched assays.'
      }),
      paper('Nature Methods 2025', 'A Visual Omics Foundation Model to Bridge Histopathology with Spatial Transcriptomics', ['OmiCLIP', 'Expression Prediction', 'Spatial Genes'], 'A visual omics model that predicts spatial gene expression from H and E stained images.', 'https://www.nature.com/articles/s41592-025-02707-1', {
        question: 'Can morphology support gene expression prediction at spatial resolution?',
        method: 'Learns image transcriptome alignment using paired Visium data.',
        value: 'Directly relevant for molecular prediction from routine histology.',
        caution: 'Predicted expression should be validated with measured spatial omics.'
      })
    ]
  },
  'bridge-oncology': {
    family: 'Pathology Omics',
    tone: 'bridge',
    title: 'Spatial Oncology',
    subtitle: 'Tumor microenvironment modeling that connects morphology, spatial molecular programs, immune structures, stromal remodeling, and clinical outcomes.',
    note: 'Spatial oncology is where pathology and omics become most biologically rich. The note should record cell neighborhoods, tumor-stroma interaction, immune organization, spatial molecular programs, and outcome associations.',
    rows: [
      ['Immune niches', 'Model immune cell organization, tertiary lymphoid structures, and immune exclusion.', null],
      ['Tumor ecology', 'Study tumor epithelial states, stromal programs, necrosis, invasion, and spatial heterogeneity.', null],
      ['Outcome links', 'Connect spatial organization to survival, recurrence, biomarker status, and therapy response.', null]
    ],
    papers: [
      paper('Nature Medicine 2026', 'An Agentic Framework for Autonomous Scientific Discovery in Cancer Pathology', ['SPARK', 'Concept Discovery', 'Cancer Pathology'], 'An agentic pathology framework that can discover and test tissue concepts relevant to cancer biology.', 'https://www.nature.com/articles/s41591-026-04357-y', {
        question: 'Can agentic pathology systems discover spatial concepts that matter for cancer biology?',
        method: 'Uses an agentic workflow to generate and operationalize pathology concepts.',
        value: 'Relevant for discovering morphology patterns linked to tumor microenvironment programs.',
        caution: 'Concepts require expert review and independent validation.'
      }),
      paper('Nature Cancer 2025', 'SMMILe Enables Accurate Spatial Quantification in Digital Pathology', ['Spatial Quantification', 'Cancer', 'Digital Pathology'], 'A spatial quantification direction for linking digital pathology with microenvironment organization.', 'https://www.nature.com/articles/s43018-025-01060-8', {
        question: 'Can digital pathology quantify spatial tissue patterns relevant to cancer?',
        method: 'Develops computational spatial quantification for pathology images.',
        value: 'Useful for tumor microenvironment and spatial biomarker studies.',
        caution: 'Spatial measurements need robust region definitions and external validation.'
      }),
      paper('Nature Communications 2025', 'Single Cell and Spatially Resolved Omics Reveal Disease Microenvironments', ['Spatial Omics', 'Microenvironment', 'Disease'], 'A spatially resolved omics study that illustrates how molecular niches and tissue structure can be connected.', 'https://www.nature.com/articles/s41467-025-66706-8', {
        question: 'How do spatial molecular neighborhoods define disease microenvironments?',
        method: 'Combines single cell and spatial profiling for tissue ecosystem analysis.',
        value: 'A useful biological template for Pathology Omics interpretation.',
        caution: 'Spatial patterns can be sensitive to sampling and annotation resolution.'
      })
    ]
  },
  'cbio-epigenetics': {
    family: 'Computational Biology',
    tone: 'bio',
    title: 'Epigenetics',
    subtitle: 'Chromatin accessibility, methylation, regulatory states, and epigenomic programs in single cell and spatial studies.',
    rows: [
      ['Chromatin state', 'Track how accessibility and methylation encode cell identity and disease programs.', null],
      ['Regulatory coupling', 'Connect epigenomic signals with RNA, protein, and phenotype.', null]
    ],
    papers: [
      paper('Nature Biotechnology 2022', 'Multi Omics Single Cell Data Integration and Regulatory Inference with GLUE', ['Epigenomics', 'ATAC', 'Regulation'], 'A reference for linking chromatin accessibility with gene expression in multimodal integration.', 'https://www.nature.com/articles/s41587-022-01284-4', {
        question: 'How can chromatin and expression be aligned while preserving regulatory structure?',
        method: 'Uses a graph-linked representation for single cell multimodal integration.',
        value: 'Useful for epigenomic regulatory interpretation.',
        caution: 'Regulatory edges require careful biological validation.'
      })
    ]
  },
  'cbio-atlas': {
    family: 'Computational Biology',
    tone: 'bio',
    title: 'Cell Atlases',
    subtitle: 'Large-scale cell atlases, tissue atlases, reference mapping, and cross-cohort biological annotation.',
    rows: [
      ['Reference mapping', 'Map new data to atlas-scale cell states and tissue contexts.', null],
      ['Atlas transfer', 'Evaluate whether atlas representations transfer across organs, donors, disease states, and platforms.', null]
    ],
    papers: [
      paper('Nature Communications 2025', 'scPRINT: Pretraining on 50 Million Cells Allows Robust Cell Representation Learning', ['Atlas', 'Cell Model', 'Transfer'], 'A large-scale cell model that illustrates atlas-driven representation learning.', 'https://www.nature.com/articles/s41467-025-58699-1', {
        question: 'Does atlas-scale pretraining improve robust cell representation?',
        method: 'Pretrains cell representations over very large cell collections.',
        value: 'Good anchor for cell atlas modeling.',
        caution: 'Check dataset overlap and annotation consistency.'
      })
    ]
  },
  'cbio-regulatory': {
    family: 'Computational Biology',
    tone: 'bio',
    title: 'Regulatory Networks',
    subtitle: 'Gene regulatory networks, enhancer gene links, transcription factors, and perturbation-supported regulation.',
    rows: [
      ['Network inference', 'Infer candidate regulators and edges from expression, chromatin, and perturbation evidence.', null],
      ['Mechanistic validation', 'Distinguish network prediction from experimentally supported regulation.', null]
    ],
    papers: [
      paper('Nature 2023', 'Transfer Learning Enables Predictions in Network Biology', ['Geneformer', 'Regulatory Network', 'Transfer'], 'A foundation model direction for network biology and regulator discovery.', 'https://www.nature.com/articles/s41586-023-06139-9', {
        question: 'Can pretrained transcriptome models reveal regulatory programs?',
        method: 'Uses transfer learning over ranked gene expression information.',
        value: 'Useful for regulator discovery and network biology.',
        caution: 'Predicted regulators need external validation.'
      })
    ]
  },
  'cbio-representation': {
    family: 'Computational Biology',
    tone: 'bio',
    title: 'Representation Learning',
    subtitle: 'Reusable embeddings for cells, genes, neighborhoods, modalities, tissue structures, and molecular programs.',
    rows: [
      ['Embedding quality', 'Evaluate transfer, interpretability, robustness, and biological conservation.', null],
      ['Task transfer', 'Use representation learning for annotation, prediction, integration, dynamics, and perturbation.', null]
    ],
    papers: [
      paper('Nature Methods 2024', 'scGPT: Toward Building a Foundation Model for Single Cell Multiomics Using Generative AI', ['Representation', 'Foundation Model', 'Transfer'], 'A representative foundation model for reusable single cell embeddings.', 'https://www.nature.com/articles/s41592-024-02201-0', {
        question: 'Can generative pretraining produce reusable biological embeddings?',
        method: 'Pretrains a transformer-style model on single cell data.',
        value: 'Central reference for cell representation learning.',
        caution: 'Transfer should be tested beyond easy annotation tasks.'
      })
    ]
  },
  'cbio-causal': {
    family: 'Computational Biology',
    tone: 'bio',
    title: 'Causal Inference',
    subtitle: 'Causal-inspired modeling, counterfactual prediction, perturbation design, and intervention-aware biological learning.',
    rows: [
      ['Counterfactual response', 'Estimate cellular responses under unseen interventions.', null],
      ['Causal caution', 'Separate causal claims from predictive correlations.', null]
    ],
    papers: [
      paper('Nature Methods 2025', 'Deep Learning Based Gene Perturbation Effect Prediction Using Single Cell Data', ['Perturbation', 'Counterfactual', 'Prediction'], 'A perturbation-response prediction direction useful for causal-inspired biological modeling.', 'https://www.nature.com/articles/s41592-025-02772-6', {
        question: 'Can models generalize to unseen cellular interventions?',
        method: 'Learns perturbation effects from single cell measurements.',
        value: 'Relevant for counterfactual biological prediction.',
        caution: 'Careful split design is essential.'
      })
    ]
  },
  'path-nuclei': {
    family: 'Computational Pathology',
    tone: 'path',
    title: 'Nuclei Segmentation',
    subtitle: 'Nuclei instance segmentation, cell classification, morphology quantification, and tissue microenvironment analysis.',
    rows: [
      ['Cell instances', 'Separate nuclei and infer cell-level morphology.', null],
      ['TME quantification', 'Use cell maps to measure immune, stromal, and tumor ecosystems.', null]
    ],
    papers: [
      paper('Nature Medicine 2024', 'A Visual Language Foundation Model for Computational Pathology', ['Evidence', 'Localization', 'Cells'], 'A language-grounded reference for connecting visual concepts with local tissue evidence.', 'https://www.nature.com/articles/s41591-024-02856-4', {
        question: 'How can pathology concepts be grounded in image regions?',
        method: 'Uses image text alignment for pathology visual concepts.',
        value: 'Relevant for segmentation and region-level evidence.',
        caution: 'Localization needs dedicated validation.'
      })
    ]
  },
  'path-diagnosis': {
    family: 'Computational Pathology',
    tone: 'path',
    title: 'Cancer Diagnosis',
    subtitle: 'Cancer detection, tumor typing, subtype classification, grading, and differential diagnosis from pathology images.',
    rows: [
      ['Diagnostic transfer', 'Test whether models generalize across cancer types and institutions.', null],
      ['Evidence grounding', 'Keep diagnosis linked to tissue regions and morphological criteria.', null]
    ],
    papers: [
      paper('Nature 2024', 'A Pathology Foundation Model for Cancer Diagnosis and Prognosis Prediction', ['CHIEF', 'Diagnosis', 'Pan Cancer'], 'A pan-cancer foundation model for diagnosis and prognosis.', 'https://www.nature.com/articles/s41586-024-07894-z', {
        question: 'Can one pathology model support broad cancer diagnosis?',
        method: 'Learns generalizable pathology image features.',
        value: 'Central reference for diagnostic pathology AI.',
        caution: 'Clinical labels and cohorts require careful reading.'
      })
    ]
  },
  'path-prognosis': {
    family: 'Computational Pathology',
    tone: 'path',
    title: 'Patient Prognosis',
    subtitle: 'Survival prediction, recurrence risk, treatment benefit, and patient-level aggregation from whole slide images.',
    rows: [
      ['Outcome design', 'Record survival endpoint, censoring, cohort structure, and treatment context.', null],
      ['Slide aggregation', 'Study how patch features become patient-level predictions.', null]
    ],
    papers: [
      PORPOISE_PAPER,
      paper('Nature Medicine 2025', 'A Multimodal Whole Slide Foundation Model for Pathology', ['TITAN', 'Prognosis', 'Patient Level'], 'A WSI-level multimodal model relevant for patient-level prediction.', 'https://www.nature.com/articles/s41591-025-03982-3', {
        question: 'Can WSI foundation models improve patient-level prediction?',
        method: 'Learns whole-slide and multimodal representations.',
        value: 'Strong reference for prognosis modeling.',
        caution: 'Treatment confounding should be inspected.'
      })
    ]
  },
  'path-stain': {
    family: 'Computational Pathology',
    tone: 'path',
    title: 'Stain Transfer',
    subtitle: 'Stain normalization, stain augmentation, scanner variation, and cross-site robustness.',
    rows: [
      ['Stain domain shift', 'Measure robustness to tissue preparation, staining, scanner, and institution.', null],
      ['Normalization limits', 'Check whether normalization preserves diagnostic morphology.', null]
    ],
    papers: [
      paper('Nature Communications 2025', 'A Clinical Benchmark of Public Self Supervised Pathology Foundation Models', ['Robustness', 'Benchmark', 'External Validation'], 'A useful benchmark direction for understanding model behavior under clinical variation.', 'https://www.nature.com/articles/s41467-025-58796-1', {
        question: 'How robust are public pathology foundation models across clinical settings?',
        method: 'Benchmarks pretrained pathology models on clinical tasks.',
        value: 'Relevant for stain and domain robustness.',
        caution: 'Benchmark composition affects model ranking.'
      })
    ]
  },
  'path-retrieval': {
    family: 'Computational Pathology',
    tone: 'path',
    title: 'WSI Retrieval',
    subtitle: 'Whole-slide retrieval, case-based reasoning, image text search, and pathology knowledge discovery.',
    rows: [
      ['Image retrieval', 'Search visually or semantically similar slides and tissue regions.', null],
      ['Text retrieval', 'Use captions, reports, and concepts to retrieve relevant pathology evidence.', null]
    ],
    papers: [
      paper('Nature Medicine 2024', 'A Visual Language Foundation Model for Computational Pathology', ['CONCH', 'Retrieval', 'Image Text'], 'A key reference for pathology image text retrieval.', 'https://www.nature.com/articles/s41591-024-02856-4', {
        question: 'Can image text pretraining enable pathology retrieval?',
        method: 'Uses contrastive pretraining over histology image-caption pairs.',
        value: 'Core paper for text-guided WSI search.',
        caution: 'Retrieval quality depends on caption coverage.'
      })
    ]
  },
  'path-biomarker': {
    family: 'Computational Pathology',
    tone: 'path',
    title: 'Biomarkers',
    subtitle: 'Histology-based biomarkers, mutation prediction, molecular phenotype inference, and therapy response.',
    rows: [
      ['Molecular phenotype', 'Infer mutation, expression, protein, or immune state from morphology.', null],
      ['Clinical endpoint', 'Connect biomarkers to outcome or treatment response.', null]
    ],
    papers: [
      PORPOISE_PAPER,
      paper('Nature 2024', 'A Pathology Foundation Model for Cancer Diagnosis and Prognosis Prediction', ['Biomarker', 'Molecular Prediction', 'CHIEF'], 'A reference for molecular characterization from histology.', 'https://www.nature.com/articles/s41586-024-07894-z', {
        question: 'Can morphology encode clinically relevant molecular states?',
        method: 'Uses pathology foundation model representations.',
        value: 'Relevant to biomarker prediction.',
        caution: 'Biomarker labels need external validation.'
      })
    ]
  },
  'path-registration': {
    family: 'Computational Pathology',
    tone: 'path',
    title: 'Image Registration',
    subtitle: 'Co-registration of serial sections, multimodal imaging, spatial omics, and pathology images.',
    rows: [
      ['Serial section alignment', 'Align H and E, IF, IHC, and spatial assays across tissue sections.', null],
      ['Registration uncertainty', 'Record deformation, tissue loss, and local mismatch.', null]
    ],
    papers: [
      paper('Nature Methods 2025', 'A Visual Omics Foundation Model to Bridge Histopathology with Spatial Transcriptomics', ['Registration', 'Histology', 'Spatial Omics'], 'A visual omics direction requiring careful correspondence between morphology and molecular signals.', 'https://www.nature.com/articles/s41592-025-02707-1', {
        question: 'How should histology and molecular maps be aligned?',
        method: 'Learns visual omics representations from paired image and expression data.',
        value: 'Useful for thinking about cross-modal registration.',
        caution: 'Spatial alignment errors affect interpretation.'
      })
    ]
  },
  'path-mil': {
    family: 'Computational Pathology',
    tone: 'path',
    title: 'Multiple Instance Learning',
    subtitle: 'Bag-level learning, attention aggregation, weak supervision, and patient-level slide prediction.',
    rows: [
      ['Weak supervision', 'Train from slide or patient labels without dense annotations.', null],
      ['Attention evidence', 'Inspect whether high-attention regions are biologically meaningful.', null]
    ],
    papers: [
      paper('Nature Biomedical Engineering 2025', 'Benchmarking Foundation Models as Feature Extractors for Weakly Supervised Computational Pathology', ['MIL', 'Weak Supervision', 'Benchmark'], 'A benchmark for foundation model features in weakly supervised pathology.', 'https://www.nature.com/articles/s41551-025-01516-3', {
        question: 'Which pretrained features work in weakly supervised WSI tasks?',
        method: 'Compares foundation models as feature extractors.',
        value: 'Practical reference for MIL pipelines.',
        caution: 'Feature benchmarks do not cover every dense task.'
      })
    ]
  },
  'path-sam': {
    family: 'Computational Pathology',
    tone: 'path',
    title: 'Promptable Segmentation',
    subtitle: 'SAM-style segmentation, prompt design, pathology adaptation, and interactive mask generation.',
    rows: [
      ['Prompt design', 'Use points, boxes, text, or reasoning as segmentation prompts.', null],
      ['Pathology adaptation', 'Adapt general segmentation to stain variation and tissue morphology.', null]
    ],
    papers: [
      paper('Nature 2024', 'A Multimodal Generative AI Copilot for Human Pathology', ['PathChat', 'Prompting', 'Evidence'], 'A pathology assistant that motivates interactive evidence and mask generation.', 'https://www.nature.com/articles/s41586-024-07618-3', {
        question: 'How can interactive models guide pathology evidence generation?',
        method: 'Combines pathology vision with language instruction tuning.',
        value: 'Useful for promptable reasoning segmentation.',
        caution: 'Generated evidence needs ground-truth validation.'
      })
    ]
  },
  'path-report': {
    family: 'Computational Pathology',
    tone: 'path',
    title: 'Report Generation',
    subtitle: 'Pathology report generation, visual evidence summarization, language grounding, and diagnostic communication.',
    rows: [
      ['Report structure', 'Generate structured diagnosis, findings, evidence, and uncertainty.', null],
      ['Grounding', 'Ensure generated text is linked to visual evidence and clinical facts.', null]
    ],
    papers: [
      paper('Nature 2024', 'A Multimodal Generative AI Copilot for Human Pathology', ['PathChat', 'Report', 'Language'], 'A reference for pathology visual-language interaction and diagnostic explanation.', 'https://www.nature.com/articles/s41586-024-07618-3', {
        question: 'Can pathology MLLMs support diagnostic communication?',
        method: 'Uses a multimodal pathology language model.',
        value: 'Relevant for report generation and explanation.',
        caution: 'Fluent text must be checked for hallucination.'
      })
    ]
  },
  'bridge-biomarker': {
    family: 'Pathology Omics',
    tone: 'bridge',
    title: 'Pathology Biomarkers',
    subtitle: 'Morphology-derived biomarkers that connect histology, omics, immune state, and clinical phenotype.',
    rows: [
      ['Morphology biomarker', 'Define biomarkers visible or inferable from tissue architecture.', null],
      ['Molecular association', 'Link image patterns with gene expression, mutation, protein, or pathway activity.', null]
    ],
    papers: [
      PORPOISE_PAPER,
      paper('Nature 2024', 'A Pathology Foundation Model for Cancer Diagnosis and Prognosis Prediction', ['Biomarker', 'Histology', 'Molecular'], 'A pan-cancer reference for biomarker-related prediction from pathology images.', 'https://www.nature.com/articles/s41586-024-07894-z', {
        question: 'Can histology reveal molecular biomarkers?',
        method: 'Uses pathology foundation representations for molecular characterization.',
        value: 'Relevant for Pathology Omics biomarkers.',
        caution: 'Biomarker claims need external cohorts.'
      })
    ]
  },
  'bridge-therapy': {
    family: 'Pathology Omics',
    tone: 'bridge',
    title: 'Therapy Response',
    subtitle: 'Treatment response, neoadjuvant therapy, immunotherapy benefit, and spatial molecular predictors.',
    rows: [
      ['Response phenotype', 'Link morphology and molecular context to treatment outcome.', null],
      ['TME response', 'Study immune and stromal programs that affect therapy.', null]
    ],
    papers: [
      paper('Nature Medicine 2025', 'A Multimodal Whole Slide Foundation Model for Pathology', ['Therapy Response', 'Multimodal', 'Outcome'], 'A multimodal whole-slide model relevant for treatment response and biomarker studies.', 'https://www.nature.com/articles/s41591-025-03982-3', {
        question: 'Can multimodal WSI models support treatment-response prediction?',
        method: 'Learns whole-slide representations with multimodal supervision.',
        value: 'Useful for treatment-response reading.',
        caution: 'Response studies need careful cohort design.'
      })
    ]
  },
  'bridge-liquid': {
    family: 'Pathology Omics',
    tone: 'bridge',
    title: 'Liquid Biopsies',
    subtitle: 'Circulating biomarkers, tissue liquid biopsy correspondence, and multi-modal cancer monitoring.',
    rows: [
      ['Tissue correspondence', 'Connect slide morphology with circulating molecular signals.', null],
      ['Monitoring', 'Track disease progression and therapy response through multi-modal evidence.', null]
    ],
    papers: [
      paper('Nature Medicine 2025', 'A Multimodal Whole Slide Foundation Model for Pathology', ['Liquid Biopsy', 'Multimodal', 'Cancer Monitoring'], 'A general multimodal pathology reference that can inspire tissue liquid biopsy correspondence.', 'https://www.nature.com/articles/s41591-025-03982-3', {
        question: 'How might tissue morphology complement circulating biomarkers?',
        method: 'Learns patient-level whole-slide representations.',
        value: 'Useful as a bridge toward monitoring-oriented Pathology Omics.',
        caution: 'Direct liquid biopsy modeling requires matched data.'
      })
    ]
  }
};


function slugify(value) {
  return String(value)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 72);
}


// --- Refined overview maps: keep sidebar subtopics and overview rows synchronized ---
Object.assign(topics['cbio-overview'], {
  subtitle: 'A compact map for single cell foundation models, epigenetics, perturbation biology, multiomics integration, spatial omics, cell atlases, trajectory inference, regulatory networks, representation learning, and causal inference.',
  rows: [
    ['Cell Foundation Models', 'Large pretrained models for gene programs, cell states, atlas transfer, and perturbation reasoning.', 'cbio-foundation'],
    ['Epigenetics', 'Chromatin accessibility, regulatory elements, epigenomic states, and cross-omics regulation.', 'cbio-epigenetics'],
    ['Perturbation Biology', 'Gene perturbation, drug response, regulatory programs, and counterfactual cellular prediction.', 'cbio-perturbation'],
    ['Multiomics Integration', 'Representation learning across RNA, chromatin, protein, spatial data, and partially observed modalities.', 'cbio-integration'],
    ['Spatial Omics', 'Tissue niches, spatial transcriptomics, spatial proteomics, and image-guided molecular inference.', 'cbio-spatial'],
    ['Cell Atlases', 'Large-scale cell references, annotation transfer, cross-tissue harmonization, and disease atlas construction.', 'cbio-atlas'],
    ['Trajectory Inference', 'Latent time, RNA velocity, fate landscapes, lineage progression, and dynamic cell-state modeling.', 'cbio-dynamics'],
    ['Regulatory Networks', 'Gene regulatory graphs, transcription factor programs, network biology, and interpretable molecular control.', 'cbio-regulatory'],
    ['Representation Learning', 'Biological embeddings, contrastive learning, transfer learning, and reusable cellular representations.', 'cbio-representation'],
    ['Causal Inference', 'Causal structure, intervention reasoning, perturbation design, and counterfactual modeling in cellular systems.', 'cbio-causal']
  ]
});

Object.assign(topics['path-overview'], {
  subtitle: 'A compact map for nuclei segmentation, cancer diagnosis, patient prognosis, stain transfer, WSI retrieval, biomarkers, foundation models, image registration, pathology agents, multiple instance learning, promptable segmentation, pathology language models, report generation, and reliable pathology AI.',
  rows: [
    ['Nuclei Segmentation', 'Cell and nuclei instance segmentation, cell typing, and morphology-aware microenvironment analysis.', 'path-nuclei'],
    ['Cancer Diagnosis', 'Tumor detection, cancer typing, grading, subtype prediction, and diagnostic support from whole-slide images.', 'path-diagnosis'],
    ['Patient Prognosis', 'Survival prediction, recurrence risk, treatment benefit, and patient-level outcome modeling.', 'path-prognosis'],
    ['Stain Transfer', 'Stain normalization, domain adaptation, cross-site robustness, and scanner variation handling.', 'path-stain'],
    ['WSI Retrieval', 'Slide retrieval, case search, visual similarity, and pathology image indexing.', 'path-retrieval'],
    ['Biomarkers', 'Molecular status, mutation prediction, MSI, immune phenotype, and clinically relevant biomarkers.', 'path-biomarker'],
    ['Foundation Models', 'Whole-slide and tile-level pretraining for generalizable pathology representation learning.', 'path-foundation'],
    ['Image Registration', 'Alignment of serial sections, multiplex stains, histology, spatial omics, and tissue modalities.', 'path-registration'],
    ['Pathology Agents', 'Agentic workflows for concept discovery, tool use, hypothesis generation, and research assistance.', 'path-agent'],
    ['Multiple Instance Learning', 'Weakly supervised WSI learning, attention pooling, evidence localization, and slide-level prediction.', 'path-mil'],
    ['Promptable Segmentation', 'SAM-style interactive masks, promptable tissue segmentation, and region-level evidence extraction.', 'path-sam'],
    ['Pathology Language Models', 'Image-text alignment, pathology copilots, visual question answering, and report-grounded reasoning.', 'path-language'],
    ['Report Generation', 'Structured pathology reports, diagnostic language generation, and evidence-grounded narrative summaries.', 'path-report'],
    ['Reliable Pathology AI', 'External validation, uncertainty, calibration, domain shift, and deployment readiness.', 'path-reliability']
  ]
});

Object.assign(topics['bridge-overview'], {
  subtitle: 'A compact map for histology spatial omics, visual omics models, molecular prediction, biomarker discovery, therapy response, liquid biopsies, and spatial oncology.',
  rows: [
    ['Histology Spatial Omics', 'Use histology to predict, align, or interpret spatial transcriptomic and proteomic patterns.', 'bridge-histology'],
    ['Visual Omics Models', 'Pretrain models with pathology images and molecular profiles for shared visual-molecular representation.', 'bridge-visualomics'],
    ['Molecular Prediction', 'Infer mutation, expression, pathway activity, and molecular phenotype from tissue morphology.', 'bridge-molecular'],
    ['Biomarker Discovery', 'Discover morphology-associated biomarkers and image-derived molecular phenotypes.', 'bridge-biomarker'],
    ['Therapy Response', 'Connect morphology, omics, treatment response, and patient outcome.', 'bridge-therapy'],
    ['Liquid Biopsies', 'Bridge tissue pathology, circulating biomarkers, and non-invasive molecular readouts.', 'bridge-liquid'],
    ['Spatial Oncology', 'Study tumor ecosystems, immune niches, stromal programs, and spatial tumor heterogeneity.', 'bridge-oncology']
  ]
});

// Give the major families more distinct color identities in the UI.
topics['cbio-overview'].tone = 'bio';
topics['path-overview'].tone = 'path';
topics['bridge-overview'].tone = 'bridge';


// --- v9 compact subtitles: keep headers concise and single-line friendly ---
if (topics['cbio-overview']) topics['cbio-overview'].subtitle = "A compact map for cell foundation models, epigenetics, perturbation biology, multiomics integration, spatial omics, cell atlases, trajectory inference, regulatory networks, representation learning, and causal inference.";
if (topics['cbio-foundation']) topics['cbio-foundation'].subtitle = "Pretrained models for reusable cell, gene, perturbation, and tissue-context representations.";
if (topics['cbio-epigenetics']) topics['cbio-epigenetics'].subtitle = "Chromatin accessibility, methylation, regulatory states, and epigenomic programs.";
if (topics['cbio-perturbation']) topics['cbio-perturbation'].subtitle = "Models for gene perturbation, drug response, regulatory intervention, and counterfactual cellular prediction.";
if (topics['cbio-integration']) topics['cbio-integration'].subtitle = "Methods for aligning RNA, chromatin, protein, spatial data, and partially observed modalities.";
if (topics['cbio-spatial']) topics['cbio-spatial'].subtitle = "Spatial transcriptomics, proteomics, tissue neighborhoods, molecular niches, and image-guided spatial learning.";
if (topics['cbio-atlas']) topics['cbio-atlas'].subtitle = "Large-scale cell atlas construction, transfer annotation, cross-dataset harmonization, and reference mapping.";
if (topics['cbio-dynamics']) topics['cbio-dynamics'].subtitle = "Trajectory inference, latent time, velocity, fate landscapes, and temporal modeling from single-cell data.";
if (topics['cbio-regulatory']) topics['cbio-regulatory'].subtitle = "Gene regulatory networks, enhancer-gene coupling, transcription factors, and regulatory program inference.";
if (topics['cbio-representation']) topics['cbio-representation'].subtitle = "General biological embeddings for cells, genes, tissues, perturbations, and multimodal transfer.";
if (topics['cbio-causal']) topics['cbio-causal'].subtitle = "Causal discovery, counterfactual reasoning, perturbation design, and intervention-aware biological modeling.";
if (topics['path-overview']) topics['path-overview'].subtitle = "A compact map for nuclei segmentation, cancer diagnosis, prognosis, stain transfer, WSI retrieval, biomarkers, foundation models, image registration, agents, MIL, promptable segmentation, language models, reports, and reliable AI.";
if (topics['path-nuclei']) topics['path-nuclei'].subtitle = "Nuclei instance segmentation, cell classification, morphology quantification, and tissue microenvironment analysis.";
if (topics['path-diagnosis']) topics['path-diagnosis'].subtitle = "Cancer detection, tumor typing, grading, subtype recognition, and diagnostic decision support.";
if (topics['path-prognosis']) topics['path-prognosis'].subtitle = "Survival, recurrence, risk stratification, treatment benefit, and patient-level outcome prediction.";
if (topics['path-stain']) topics['path-stain'].subtitle = "Stain normalization, style transfer, scanner variation, and cross-site pathology robustness.";
if (topics['path-retrieval']) topics['path-retrieval'].subtitle = "Whole-slide retrieval, case search, visual similarity, and knowledge-supported pathology navigation.";
if (topics['path-biomarker']) topics['path-biomarker'].subtitle = "Biomarker prediction from morphology, molecular status, immune phenotypes, and treatment markers.";
if (topics['path-foundation']) topics['path-foundation'].subtitle = "Large-scale pathology models for WSI representation, diagnosis, prognosis, biomarkers, and rare cancer detection.";
if (topics['path-registration']) topics['path-registration'].subtitle = "Image registration for serial sections, multiplexed imaging, histology, and spatial molecular alignment.";
if (topics['path-agent']) topics['path-agent'].subtitle = "Agentic systems for pathology planning, retrieval, segmentation, measurement, and scientific discovery.";
if (topics['path-mil']) topics['path-mil'].subtitle = "Multiple instance learning for weak supervision, slide aggregation, region evidence, and patient-level prediction.";
if (topics['path-sam']) topics['path-sam'].subtitle = "Promptable segmentation, interactive masks, region localization, and SAM-style pathology adaptation.";
if (topics['path-language']) topics['path-language'].subtitle = "Pathology image-text alignment, report reasoning, question answering, and evidence-grounded multimodal models.";
if (topics['path-report']) topics['path-report'].subtitle = "Pathology report generation, diagnostic summarization, structured findings, and language-based clinical support.";
if (topics['path-reliability']) topics['path-reliability'].subtitle = "Domain shift, stain variation, uncertainty, calibration, external validation, and clinical deployment.";
if (topics['bridge-overview']) topics['bridge-overview'].subtitle = "A compact map for histology spatial omics, visual omics models, molecular prediction, biomarker discovery, therapy response, liquid biopsies, and spatial oncology.";
if (topics['bridge-histology']) topics['bridge-histology'].subtitle = "Histology-guided spatial transcriptomics, proteomics, tissue architecture, and molecular tissue maps.";
if (topics['bridge-visualomics']) topics['bridge-visualomics'].subtitle = "Visual-omics models that connect H&E morphology with transcriptomic, proteomic, and molecular profiles.";
if (topics['bridge-molecular']) topics['bridge-molecular'].subtitle = "Prediction of gene expression, mutation, pathway activity, and molecular subtype from pathology images.";
if (topics['bridge-biomarker']) topics['bridge-biomarker'].subtitle = "Morphology-associated biomarkers, image-derived molecular phenotypes, and multimodal discovery.";
if (topics['bridge-therapy']) topics['bridge-therapy'].subtitle = "Treatment response, neoadjuvant therapy, immunotherapy benefit, and spatial molecular predictors.";
if (topics['bridge-liquid']) topics['bridge-liquid'].subtitle = "Tissue pathology, circulating biomarkers, liquid biopsies, and non-invasive molecular readouts.";
if (topics['bridge-oncology']) topics['bridge-oncology'].subtitle = "Tumor ecosystems, immune niches, stromal programs, and spatial tumor heterogeneity.";



// --- v10 concise subtitles and consistent family wording ---
const conciseSubtitles = {
  'cbio-overview': 'A compact map for foundation models, epigenetics, perturbation, multiomics, spatial omics, atlases, trajectories, regulatory networks, representation learning, and causality.',
  'cbio-foundation': 'Reusable cell and gene foundation models for atlases, perturbations, and tissue context.',
  'cbio-epigenetics': 'Chromatin accessibility, methylation, regulatory states, and epigenomic programs.',
  'cbio-perturbation': 'Gene perturbation, drug response, regulatory intervention, and counterfactual cell prediction.',
  'cbio-integration': 'Alignment of RNA, chromatin, protein, spatial data, and partially observed modalities.',
  'cbio-spatial': 'Spatial transcriptomics, proteomics, tissue niches, and image-guided molecular learning.',
  'cbio-atlas': 'Cell atlas construction, transfer annotation, harmonization, and reference mapping.',
  'cbio-dynamics': 'Trajectory inference, latent time, velocity, fate landscapes, and temporal single-cell modeling.',
  'cbio-regulatory': 'Gene regulatory networks, enhancer-gene coupling, transcription factors, and programs.',
  'cbio-representation': 'Biological embeddings for cells, genes, tissues, perturbations, and multimodal transfer.',
  'cbio-causal': 'Causal discovery, counterfactual reasoning, perturbation design, and intervention modeling.',
  'path-overview': 'A compact map for nuclei, diagnosis, prognosis, stain transfer, WSI retrieval, biomarkers, foundation models, registration, agents, MIL, segmentation, language, reports, and reliability.',
  'path-nuclei': 'Nuclei instance segmentation, cell classification, morphology, and microenvironment analysis.',
  'path-diagnosis': 'Cancer detection, tumor typing, grading, subtyping, and diagnostic decision support.',
  'path-prognosis': 'Survival, recurrence, risk stratification, treatment benefit, and patient outcome prediction.',
  'path-stain': 'Stain normalization, style transfer, scanner variation, and cross-site robustness.',
  'path-retrieval': 'Whole-slide retrieval, case search, visual similarity, and knowledge-supported navigation.',
  'path-biomarker': 'Morphology-based biomarker prediction, molecular status, immune phenotype, and treatment markers.',
  'path-foundation': 'WSI foundation models for diagnosis, prognosis, biomarkers, and rare cancer detection.',
  'path-registration': 'Serial-section, multiplexed imaging, histology, and spatial molecular registration.',
  'path-agent': 'Agentic pathology workflows for planning, retrieval, segmentation, measurement, and discovery.',
  'path-mil': 'Weak supervision, slide aggregation, region evidence, and patient-level prediction.',
  'path-sam': 'Promptable masks, interactive segmentation, region localization, and SAM-style adaptation.',
  'path-language': 'Image-text alignment, report reasoning, visual question answering, and grounded multimodal models.',
  'path-report': 'Report generation, diagnostic summaries, structured findings, and clinical language support.',
  'path-reliability': 'Domain shift, stain variation, uncertainty, calibration, external validation, and deployment.',
  'bridge-overview': 'A compact map for histology spatial omics, visual omics, molecular prediction, biomarkers, therapy response, liquid biopsies, and spatial oncology.',
  'bridge-histology': 'Histology-guided spatial transcriptomics, proteomics, architecture, and molecular maps.',
  'bridge-visualomics': 'Visual-omics models connecting H&E morphology with transcriptomic, proteomic, and molecular profiles.',
  'bridge-molecular': 'Gene expression, mutation, pathway activity, and molecular subtype prediction from slides.',
  'bridge-biomarker': 'Morphology-associated biomarkers, image-derived molecular phenotypes, and multimodal discovery.',
  'bridge-therapy': 'Treatment response, neoadjuvant therapy, immunotherapy benefit, and spatial molecular predictors.',
  'bridge-liquid': 'Tissue pathology, circulating biomarkers, liquid biopsies, and non-invasive molecular readouts.',
  'bridge-oncology': 'Tumor ecosystems, immune niches, stromal programs, and spatial heterogeneity.'
};
Object.entries(conciseSubtitles).forEach(([key, subtitle]) => {
  if (topics[key]) topics[key].subtitle = subtitle;
});


function cleanNoteName(value) {
  return String(value || '').replace(/[^A-Za-z0-9]+/g, '');
}

function buildReadableFallbackName(title) {
  const words = String(title || 'Paper Note').match(/[A-Za-z0-9]+/g) || ['Paper', 'Note'];
  return words.slice(0, 6).map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join('');
}

function buildNoteFilePath(paperItem, topicKey, tone) {
  if (paperItem.note?.noteFile) return paperItem.note.noteFile;
  if (paperItem.noteFile) return paperItem.noteFile;
  const finishedNoteFile = getFinishedNoteFile(paperItem);
  if (finishedNoteFile) return finishedNoteFile;
  const folderMap = { bio: 'CBio', path: 'CPath', bridge: 'PathOmics' };
  const folder = folderMap[tone] || 'CBio';
  const preferredNames = ['scGPT', 'Geneformer', 'Nicheformer', 'scPRINT', 'GLUE', 'MultiVI', 'MIDAS', 'OmiCLIP', 'MultiVeloVAE', 'GraphVelo', 'UNI', 'Prov GigaPath', 'Virchow', 'CHIEF', 'TITAN', 'CONCH', 'PathChat', 'PLIP', 'SPARK', 'SMMILe', 'HESpotEx', 'Loki'];
  const genericTags = new Set(['Generative AI','Single Cell','Network Biology','Transfer','Spatial Context','Foundation Model','Cell Model','Atlas','Unpaired Data','Regulatory Graph','VAE','Mosaic Data','Mosaic Integration','Knowledge Transfer','Benchmark','Spatial Omics','Reproducibility','Histology','Spatial Transcriptomics','Spatial Profiling','Microenvironment','Disease','Velocity','Multiomics','Multimodal Velocity','Mechanism','Perturbation','Dynamics','Prediction','Regulatory Network','Therapeutic Target','Regulation','Self Supervision','Whole Slide','Real World Data','Clinical Grade','Rare Cancer','Diagnosis','Prognosis','Multimodal','Image Text','Retrieval','Copilot','Question Answering','Social Data','Zero Shot','Agent','Discovery','Knowledge Enhanced','Reasoning','Evidence','Localization','Visual Reasoning','Weak Supervision','Feature Extraction','Cancer','Outcome','Clinical','Deployment','Real World','Validation','Biomarker','Patient Level','Reliability','External Evaluation','Clinical Benchmark','Clinical Workflow','Loki','Expression Prediction','Spatial Data','Visual Omics','Contrastive Learning','Molecular Characterization','Spatial Genes','Concept Discovery','Cancer Pathology','Spatial Quantification','Counterfactual','Pan Cancer','Robustness','Registration','MIL','Prompting','Report','Language','Molecular','Therapy Response','Liquid Biopsy','Cancer Monitoring']);
  const haystack = `${paperItem.title} ${(paperItem.tags || []).join(' ')}`.toLowerCase().replace(/\s+/g, '');
  let base = '';
  preferredNames.some((name) => {
    if (haystack.includes(name.toLowerCase().replace(/\s+/g, ''))) {
      base = cleanNoteName(name);
      return true;
    }
    return false;
  });
  if (!base) {
    const usefulTag = (paperItem.tags || []).find((tag) => !genericTags.has(tag));
    base = cleanNoteName(usefulTag) || buildReadableFallbackName(paperItem.title);
  }
  return `notes_V1/${folder}/${base}.html`;
}

const FINISHED_NOTE_FILE_BY_TITLE = [
  ['pan-cancer integrative histology-genomic analysis', 'notes/porpoise.pdf'],
  ['visual omics foundation model to bridge histopathology with spatial transcriptomics', 'notes/OmiCLIP.pdf'],
  ['visual–omics foundation model to bridge histopathology with spatial transcriptomics', 'notes/OmiCLIP.pdf'],
  ['multimodal foundation model of spatial transcriptomics and histology', 'notes/STORM.pdf'],
  ['systematically decoding pathological morphologies and molecular profiles', 'notes/MultiEmbed.pdf']
];

function getFinishedNoteFile(paperItem) {
  const title = String(paperItem?.title || '').toLowerCase();
  const found = FINISHED_NOTE_FILE_BY_TITLE.find(([key]) => title.includes(key.toLowerCase()));
  return found ? found[1] : '';
}

function addPaperToTopic(topicKey, paperItem) {
  const topic = topics[topicKey];
  if (!topic || !Array.isArray(topic.papers)) return;
  if (!topic.papers.some((item) => item.title === paperItem.title)) topic.papers.push(paperItem);
}

// Finished notes are shared paper objects, so updating one object updates all linked topic entries.
[
  ['bridge-histology', OMICLIP_PAPER],
  ['bridge-visualomics', OMICLIP_PAPER],
  ['bridge-molecular', OMICLIP_PAPER],
  ['cbio-spatial', OMICLIP_PAPER],
  ['bridge-histology', STORM_PAPER],
  ['bridge-visualomics', STORM_PAPER],
  ['bridge-molecular', STORM_PAPER],
  ['bridge-therapy', STORM_PAPER],
  ['bridge-oncology', STORM_PAPER],
  ['cbio-spatial', STORM_PAPER],
  ['path-prognosis', STORM_PAPER],
  ['bridge-histology', MULTIEMBED_PAPER],
  ['bridge-visualomics', MULTIEMBED_PAPER],
  ['bridge-molecular', MULTIEMBED_PAPER],
  ['bridge-biomarker', MULTIEMBED_PAPER],
  ['bridge-oncology', MULTIEMBED_PAPER],
  ['path-prognosis', MULTIEMBED_PAPER],
  ['path-biomarker', MULTIEMBED_PAPER],
  ['bridge-histology', PORPOISE_PAPER],
  ['bridge-molecular', PORPOISE_PAPER],
  ['bridge-biomarker', PORPOISE_PAPER],
  ['path-prognosis', PORPOISE_PAPER],
  ['path-biomarker', PORPOISE_PAPER]
].forEach(([topicKey, paperItem]) => addPaperToTopic(topicKey, paperItem));

const topicKeys = Object.keys(topics).filter((key) => !key.endsWith('overview'));
const allPapers = topicKeys.flatMap((key) =>
  topics[key].papers.map((p) => ({
    ...p,
    topicKey: key,
    topicTitle: topics[key].title,
    family: topics[key].family,
    tone: topics[key].tone,
    slug: `${slugify(p.title)}-${key}`,
    noteFile: buildNoteFilePath(p, key, topics[key].tone)
  }))
);
const paperBySlug = new Map(allPapers.map((p) => [p.slug, p]));
const families = ['All', 'Computational Biology', 'Computational Pathology', 'Pathology Omics'];

let currentShare = {
  title: 'Nature Portfolio Reading Map',
  subtitle: 'Computational biology, computational pathology, and pathology omics AI.',
  tags: ['Single Cell', 'Whole Slide', 'Spatial Omics'],
  url: window.location.href.split('#')[0],
  tone: 'default'
};

function escapeHTML(value) {
  return String(value ?? '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

function renderOverviewPage(key) {
  const data = topics[key];
  const page = document.getElementById(`page-${key}`);
  if (!page || !data) return;
  const isOverview = key.endsWith('overview');
  const rows = data.rows.map(([name, desc, link], index) => `
    <div class="topic-row">
      <span class="topic-row-icon doc-icon" aria-hidden="true"></span>
      <div class="topic-name">${escapeHTML(name)}</div>
      <div class="topic-desc">${escapeHTML(desc)}</div>
      ${link ? `<a class="topic-jump jump-link" href="#${link}" data-page="${link}">Open</a>` : '<span></span>'}
    </div>
  `).join('');
  const papers = data.papers.length ? data.papers.map(renderPaper).join('') : '<div class="empty-note">Choose a topic above to open the paper list.</div>';
  const topicIndex = isOverview ? `<div class="topic-index">${rows}</div>` : '';
  page.innerHTML = `
    <div class="overview-shell family-${data.tone} ${isOverview ? 'is-overview-page' : 'is-topic-page'}" data-family="${escapeHTML(data.family)}">
      <header class="overview-hero">
        <div class="overview-family">${escapeHTML(data.family)}</div>
        <h2 class="overview-title">${escapeHTML(data.title)}</h2>
        <p class="overview-text">${escapeHTML(data.subtitle)}</p>
      </header>
      ${topicIndex}
      ${isOverview ? '' : `<div class="paper-list paper-list-direct">${papers}</div>`}
    </div>
  `;
}

function renderPaper(paperItem) {
  const tags = paperItem.tags.slice(0, 3).map((tag) => `<span class="badge">${escapeHTML(tag)}</span>`).join('');
  return `
    <article class="paper-card paper-card-simple family-${paperItem.tone}">
      <div class="paper-content">
        <div class="paper-meta"><span class="badge venue">${escapeHTML(paperItem.venue)}</span>${tags}</div>
        <h3 class="paper-title">${escapeHTML(paperItem.title)}</h3>
      </div>
      <div class="paper-actions">
        <a class="paper-open paper-link" href="${paperItem.url}" target="_blank" rel="noopener noreferrer">Paper</a>
        <a class="paper-open note-link" href="${buildNoteHref(paperItem.noteFile)}"${buildNoteAttrs(paperItem.noteFile)}>Note</a>
      </div>
    </article>
  `;
}

function getNoteVisit(slug) {
  return Number(localStorage.getItem(`readingNotesNoteVisits:${slug}`) || '0');
}
function updateNoteVisit(slug) {
  const key = `readingNotesNoteVisits:${slug}`;
  const visits = Number(localStorage.getItem(key) || '0') + 1;
  localStorage.setItem(key, String(visits));
  return visits;
}



function getStoredNoteDraft(slug) {
  try {
    return JSON.parse(localStorage.getItem(`readingNotesUserNote:${slug}`) || '{}');
  } catch (error) {
    return {};
  }
}

function buildInitialNote(paperItem) {
  const base = paperItem.note || {};
  const tags = (paperItem.tags || []).join(', ');
  const topic = paperItem.topicTitle || 'Reading Topic';
  const family = paperItem.family || 'Reading Notes';

  const lensMap = {
    bio: {
      question: `What biological representation problem does this paper address within ${topic}?`,
      contribution: `Use this paper to understand how ${topic.toLowerCase()} connects cell states, molecular programs, and reusable biological modeling.`,
      method: `Track the data modality, pretraining or modeling objective, and how the model transfers across cell types, tissues, perturbations, or cohorts.`,
      evidence: `Check benchmark design, out-of-distribution splits, biological validation, and whether results go beyond embedding visualization.`,
      caution: `Watch for dataset overlap, annotation leakage, modality imbalance, and claims that exceed available perturbation or temporal evidence.`
    },
    path: {
      question: `What pathology task or clinical bottleneck does this paper try to solve within ${topic}?`,
      contribution: `Read this paper as part of a pathology AI stack: representation learning, evidence localization, slide aggregation, and clinical validation.`,
      method: `Record the slide scale, supervision source, model backbone, aggregation strategy, and validation cohorts.`,
      evidence: `Check external validation, cancer-type coverage, patient-level splitting, calibration, and evidence interpretability.`,
      caution: `Separate benchmark accuracy from clinical reliability, workflow value, and robustness to staining, scanner, and cohort shift.`
    },
    bridge: {
      question: `How does this paper connect histology morphology with molecular or spatial omics information?`,
      contribution: `Use this paper to map how visual phenotypes, molecular programs, spatial niches, and cancer biology can be jointly modeled.`,
      method: `Track the image scale, omics modality, alignment strategy, prediction target, and whether paired tissue measurements are required.`,
      evidence: `Check spatial resolution, molecular validation, cohort diversity, and whether visual-to-omics predictions are biologically interpretable.`,
      caution: `Treat predicted molecular maps as model estimates unless validated by measured omics or orthogonal experiments.`
    }
  };

  const lens = lensMap[paperItem.tone] || lensMap.bio;

  return {
    question: base.question || lens.question,
    contribution: base.value || lens.contribution,
    method: base.method || lens.method,
    evidence: `Paper: ${paperItem.venue}. Topic: ${topic}. Tags: ${tags || 'None listed'}. ${lens.evidence}`,
    caution: base.caution || lens.caution,
    personal: base.personal || `Temporary note file for "${paperItem.title}".\n\n- Key idea:\n- Useful figure or experiment:\n- Possible connection to my work:\n- Follow-up papers:\n- Implementation or evaluation idea:`
  };
}

function getEffectiveNote(paperItem) {
  const draft = getStoredNoteDraft(paperItem.slug);
  const initial = buildInitialNote(paperItem);
  return {
    question: draft.question ?? initial.question,
    contribution: draft.contribution ?? draft.value ?? initial.contribution,
    method: draft.method ?? initial.method,
    evidence: draft.evidence ?? initial.evidence,
    caution: draft.caution ?? initial.caution,
    personal: draft.personal ?? initial.personal
  };
}

function collectNoteDraft(slug) {
  const rootNode = document.querySelector(`[data-note-editor="${slug}"]`);
  if (!rootNode) return null;
  const draft = {};
  rootNode.querySelectorAll('[data-note-field]').forEach((field) => {
    draft[field.dataset.noteField] = field.value.trim();
  });
  draft.updatedAt = new Date().toISOString();
  return draft;
}

function saveNoteDraft(slug) {
  const draft = collectNoteDraft(slug);
  if (!draft) return;
  localStorage.setItem(`readingNotesUserNote:${slug}`, JSON.stringify(draft, null, 2));
  const toast = document.getElementById('noteSaveStatus');
  if (toast) {
    toast.textContent = 'Saved locally in this browser.';
    setTimeout(() => { toast.textContent = ''; }, 2200);
  }
}

function resetNoteDraft(slug) {
  localStorage.removeItem(`readingNotesUserNote:${slug}`);
  const item = paperBySlug.get(slug);
  if (item) renderNotePage(item, false);
}

function buildNoteMarkdown(item, note) {
  return `# ${item.title}

**Venue:** ${item.venue}  
**Topic:** ${item.topicTitle}  
**Family:** ${item.family}  
**Paper:** ${item.url}

## Reading question

${note.question}

## Main contribution

${note.contribution}

## Method notes

${note.method}

## Evidence and evaluation

${note.evidence}

## Limitations and cautions

${note.caution}

## My notes

${note.personal}

---
Temporary note file generated for Ye Zhang Reading Notes.
`;
}

async function copyNoteDraft(slug) {
  const item = paperBySlug.get(slug);
  const note = collectNoteDraft(slug) || getEffectiveNote(item || { slug, note: {} });
  const draft = {
    slug,
    title: item?.title || '',
    topic: item?.topicTitle || '',
    note
  };
  const text = JSON.stringify(draft, null, 2);
  await navigator.clipboard?.writeText(text);
  const toast = document.getElementById('noteSaveStatus');
  if (toast) {
    toast.textContent = 'Note JSON copied. Commit it to the site data when ready.';
    setTimeout(() => { toast.textContent = ''; }, 2600);
  }
}

function downloadNoteDraft(slug) {
  const item = paperBySlug.get(slug);
  const note = collectNoteDraft(slug) || getEffectiveNote(item || { slug, note: {} });
  const draft = {
    slug,
    title: item?.title || '',
    topic: item?.topicTitle || '',
    note
  };
  const blob = new Blob([JSON.stringify(draft, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${slug}-note.json`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

function downloadNoteMarkdown(slug) {
  const item = paperBySlug.get(slug);
  if (!item) return;
  const note = collectNoteDraft(slug) || getEffectiveNote(item);
  const blob = new Blob([buildNoteMarkdown(item, note)], { type: 'text/markdown' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${slug}.md`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
  const toast = document.getElementById('noteSaveStatus');
  if (toast) {
    toast.textContent = 'Markdown note downloaded.';
    setTimeout(() => { toast.textContent = ''; }, 2200);
  }
}

function renderNotePage(paperItem, increment = true) {
  const page = document.getElementById('page-note');
  if (!page || !paperItem) return false;
  const visits = increment ? updateNoteVisit(paperItem.slug) : getNoteVisit(paperItem.slug);
  const note = getEffectiveNote(paperItem);
  const noteRows = [
    ['question', 'Reading question', note.question],
    ['contribution', 'Main contribution', note.contribution],
    ['method', 'Method notes', note.method],
    ['evidence', 'Evidence and evaluation', note.evidence],
    ['caution', 'Limitations and cautions', note.caution],
    ['personal', 'My notes', note.personal]
  ];
  page.innerHTML = `
    <article class="note-page family-${paperItem.tone}">
      <header class="note-hero">
        <div class="note-crumb"><a href="#${paperItem.topicKey}" data-page="${paperItem.topicKey}">${escapeHTML(paperItem.topicTitle)}</a></div>
        <div class="paper-meta"><span class="badge venue">${escapeHTML(paperItem.venue)}</span>${paperItem.tags.map((tag)=>`<span class="badge">${escapeHTML(tag)}</span>`).join('')}</div>
        <h2 class="note-title">${escapeHTML(paperItem.title)}</h2>
        <div class="note-file-row">
          <span class="note-file-badge">HTML note · ${escapeHTML(paperItem.noteFile)}</span>
          <span class="note-visit">Note visits · ${visits}</span>
        </div>
        <div class="note-toolbar">
          <a class="paper-open paper-link" href="${paperItem.url}" target="_blank" rel="noopener noreferrer">Open paper</a>
          <a class="paper-open note-file-link" href="${paperItem.noteFile}" target="_blank" rel="noopener noreferrer">Open note file</a>
          <button class="paper-open note-link" type="button" data-share-note="${paperItem.slug}">Share note</button>
        </div>
      </header>

      <section class="note-editor note-editor-live" data-note-editor="${paperItem.slug}">
        <div class="note-edit-head">
          <div>
            <div class="note-edit-kicker">Editable reading note</div>
            <h3>Temporary note file</h3>
            <p>Each paper starts with a specific note draft. Save edits locally, then export JSON or Markdown when you want to commit the note to GitHub.</p>
          </div>
          <div class="note-edit-actions">
            <button type="button" class="note-editor-button primary" data-note-action="save" data-note-slug="${paperItem.slug}">Save</button>
            <button type="button" class="note-editor-button" data-note-action="copy" data-note-slug="${paperItem.slug}">Copy JSON</button>
            <button type="button" class="note-editor-button" data-note-action="download" data-note-slug="${paperItem.slug}">JSON</button>
            <button type="button" class="note-editor-button" data-note-action="markdown" data-note-slug="${paperItem.slug}">Markdown</button>
            <button type="button" class="note-editor-button subtle" data-note-action="reset" data-note-slug="${paperItem.slug}">Reset</button>
          </div>
        </div>
        <div id="noteSaveStatus" class="note-save-status" aria-live="polite"></div>
        <div class="note-field-grid">
          ${noteRows.map(([field, label, value]) => `
            <label class="note-line note-line-edit note-field-${field}">
              <div class="note-line-label">${escapeHTML(label)}</div>
              <textarea data-note-field="${field}" rows="${field === 'personal' ? 9 : field === 'evidence' ? 5 : 4}" spellcheck="true">${escapeHTML(value)}</textarea>
            </label>
          `).join('')}
        </div>
        <div class="note-publish-hint">
          <strong>Long-term maintenance.</strong>
          Static GitHub Pages cannot directly write back to your repository. The recommended workflow is: edit in browser → export JSON or Markdown → commit under <code>notes/</code> or integrate a CMS later.
        </div>
      </section>
    </article>
  `;
  currentShare = buildShareFromPaper(paperItem);
  updateSharePreview();
  return true;
}

function buildShareFromPaper(paperItem) {
  return {
    title: paperItem.title,
    subtitle: `${paperItem.venue} · ${paperItem.topicTitle}`,
    tags: [paperItem.family, paperItem.topicTitle, ...(paperItem.tags || [])].slice(0, 4),
    url: `${window.location.href.split('#')[0]}#note/${paperItem.slug}`,
    tone: paperItem.tone
  };
}
function buildShareFromTopic(pageKey) {
  const data = topics[pageKey];
  if (!data) return {
    title: 'Nature Portfolio Reading Map',
    subtitle: 'Computational biology, computational pathology, and pathology omics AI.',
    tags: ['Single Cell', 'Whole Slide', 'Spatial Omics'],
    url: window.location.href.split('#')[0],
    tone: 'default'
  };
  return {
    title: data.title,
    subtitle: data.family,
    tags: [data.family, 'Nature Portfolio', 'Reading Notes'],
    url: `${window.location.href.split('#')[0]}#${pageKey}`,
    tone: data.tone
  };
}

Object.keys(topics).forEach(renderOverviewPage);


let readerState = {
  pdf: '',
  title: '',
  scale: 1,
  layout: 'split'
};

function getPDFTitleFromUrl(url) {
  const match = allPapers.find((item) => item.noteFile === url);
  if (match) return match.title;
  const clean = decodeURIComponent(url.split('/').pop() || 'PDF Note').replace(/\.pdf$/i, '');
  return clean.replace(/[-_]+/g, ' ');
}

function renderReaderPage(pdfUrl) {
  const page = document.getElementById('page-reader');
  if (!page) return false;
  const decodedUrl = decodeURIComponent(pdfUrl || '');
  if (!decodedUrl) return false;
  readerState.pdf = decodedUrl;
  readerState.title = getPDFTitleFromUrl(decodedUrl);
  readerState.scale = 1;
  const noteKey = `pdfReaderSideNote:${decodedUrl}`;
  const savedNote = localStorage.getItem(noteKey) || '';
  page.innerHTML = `
    <div class="pdf-reader-shell" data-layout="${readerState.layout}">
      <header class="pdf-reader-head">
        <div>
          <div class="pdf-reader-kicker">PDF Reading Desk</div>
          <h2>${escapeHTML(readerState.title)}</h2>
          <p>${escapeHTML(decodedUrl)}</p>
        </div>
        <div class="pdf-reader-actions">
          <button type="button" class="reader-btn" data-reader-action="back">← Back</button>
          <button type="button" class="reader-btn" data-reader-action="zoom-out">−</button>
          <span class="reader-zoom" id="readerZoom">100%</span>
          <button type="button" class="reader-btn" data-reader-action="zoom-in">+</button>
          <button type="button" class="reader-btn" data-reader-action="fit">Fit</button>
          <button type="button" class="reader-btn" data-reader-action="layout">Split</button>
          <a class="reader-btn reader-primary" href="${escapeHTML(decodedUrl)}" target="_blank" rel="noopener noreferrer">Open PDF</a>
        </div>
      </header>
      <div class="pdf-reader-body">
        <section class="pdf-frame-panel">
          <div class="pdf-frame-scale" id="pdfFrameScale">
            <iframe class="pdf-frame" src="${escapeHTML(decodedUrl)}#toolbar=1&navpanes=0&view=FitH" title="${escapeHTML(readerState.title)}"></iframe>
          </div>
        </section>
        <aside class="pdf-note-panel">
          <div class="pdf-note-head">
            <strong>Reading notes</strong>
            <span>Saved locally</span>
          </div>
          <textarea id="pdfSideNote" placeholder="Write highlights, questions, or page references here...">${escapeHTML(savedNote)}</textarea>
          <div class="pdf-note-actions">
            <button type="button" class="reader-btn reader-primary" data-reader-action="save-note">Save note</button>
            <button type="button" class="reader-btn" data-reader-action="download-note">Export note</button>
          </div>
          <p class="pdf-reader-tip">The embedded PDF keeps browser-native page navigation and zoom. Side notes are stored in this browser and can be exported.</p>
        </aside>
      </div>
    </div>
  `;
  updateReaderScale();
  return true;
}

function updateReaderScale() {
  const frameScale = document.getElementById('pdfFrameScale');
  const zoomLabel = document.getElementById('readerZoom');
  if (!frameScale) return;
  frameScale.style.transform = `scale(${readerState.scale})`;
  frameScale.style.width = `${100 / readerState.scale}%`;
  frameScale.style.height = `${100 / readerState.scale}%`;
  if (zoomLabel) zoomLabel.textContent = `${Math.round(readerState.scale * 100)}%`;
}

function savePDFSideNote() {
  const textarea = document.getElementById('pdfSideNote');
  if (!textarea || !readerState.pdf) return;
  localStorage.setItem(`pdfReaderSideNote:${readerState.pdf}`, textarea.value);
}

function downloadPDFSideNote() {
  const textarea = document.getElementById('pdfSideNote');
  if (!textarea || !readerState.pdf) return;
  const content = `# ${readerState.title}\n\nPDF: ${readerState.pdf}\n\n${textarea.value}\n`;
  const blob = new Blob([content], { type: 'text/markdown;charset=utf-8' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = `${readerState.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') || 'pdf-note'}.md`;
  link.click();
  URL.revokeObjectURL(link.href);
}

function handleReaderAction(action) {
  const shell = document.querySelector('.pdf-reader-shell');
  if (action === 'back') {
    history.back();
    return;
  }
  if (action === 'zoom-in') readerState.scale = Math.min(1.75, readerState.scale + 0.1);
  if (action === 'zoom-out') readerState.scale = Math.max(0.65, readerState.scale - 0.1);
  if (action === 'fit') readerState.scale = 1;
  if (action === 'layout' && shell) {
    readerState.layout = readerState.layout === 'split' ? 'focus' : 'split';
    shell.dataset.layout = readerState.layout;
    const btn = document.querySelector('[data-reader-action="layout"]');
    if (btn) btn.textContent = readerState.layout === 'split' ? 'Split' : 'Focus';
  }
  if (action === 'save-note') {
    savePDFSideNote();
    showToast('PDF side note saved.');
  }
  if (action === 'download-note') downloadPDFSideNote();
  updateReaderScale();
}

function getPageFromHash() {
  const hash = window.location.hash.replace('#', '').trim();
  if (['home-introduction', 'home-search', 'finish-notes', 'reading-queue', 'topic-summary'].includes(hash)) return 'home';
  return hash || 'home';
}

function activatePage(pageKey, options = {}) {
  const { updateHash = true, smoothScroll = true } = options;
  if (pageKey.startsWith('reader/')) {
    const pdfUrl = pageKey.replace('reader/', '');
    const ok = renderReaderPage(pdfUrl);
    if (!ok) return false;
    document.querySelectorAll('.page').forEach((page) => page.classList.remove('is-active'));
    document.querySelectorAll('[data-page]').forEach((item) => item.classList.remove('active'));
    document.getElementById('page-reader')?.classList.add('is-active');
    currentShare = {
      title: readerState.title || 'PDF Reading Note',
      subtitle: 'PDF reading desk · Ye Zhang Reading Notes',
      tags: ['PDF', 'Reading Note', 'Path Omics'],
      url: `${window.location.href.split('#')[0]}#reader/${pdfUrl}`,
      tone: 'home'
    };
    updateSharePreview();
    if (updateHash) window.location.hash = pageKey;
    window.scrollTo({ top: 0, behavior: smoothScroll ? 'smooth' : 'auto' });
    return true;
  }
  if (pageKey.startsWith('note/')) {
    const slug = pageKey.replace('note/', '');
    const item = paperBySlug.get(slug);
    if (!item) return false;
    renderNotePage(item, true);
    document.querySelectorAll('.page').forEach((page) => page.classList.remove('is-active'));
    document.querySelectorAll('[data-page]').forEach((item) => item.classList.remove('active'));
    document.getElementById('page-note')?.classList.add('is-active');
    document.querySelectorAll(`[data-page="${item.topicKey}"]`).forEach((nav) => nav.classList.add('active'));
    if (updateHash) window.location.hash = pageKey;
    window.scrollTo({ top: 0, behavior: smoothScroll ? 'smooth' : 'auto' });
    return true;
  }
  const target = document.getElementById(`page-${pageKey}`);
  if (!target) return false;
  document.querySelectorAll('.page').forEach((page) => page.classList.remove('is-active'));
  document.querySelectorAll('[data-page]').forEach((item) => item.classList.remove('active'));
  target.classList.add('is-active');
  document.querySelectorAll(`[data-page="${pageKey}"]`).forEach((item) => item.classList.add('active'));
  currentShare = buildShareFromTopic(pageKey);
  updateSharePreview();
  if (updateHash) window.location.hash = pageKey;
  window.scrollTo({ top: 0, behavior: smoothScroll ? 'smooth' : 'auto' });
  return true;
}

document.addEventListener('click', (event) => {
  const readerAction = event.target.closest('[data-reader-action]');
  if (readerAction) {
    event.preventDefault();
    handleReaderAction(readerAction.dataset.readerAction);
    return;
  }

  const homeAnchor = event.target.closest('.home-anchor-link');
  if (homeAnchor) {
    event.preventDefault();
    activatePage('home', { updateHash: false, smoothScroll: false });
    const targetId = homeAnchor.getAttribute('href')?.replace('#', '');
    const target = targetId ? document.getElementById(targetId) : null;
    target?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    if (targetId) history.replaceState(null, '', `#${targetId}`);
    return;
  }

  const noteLink = event.target.closest('[data-note]');
  if (noteLink) {
    event.preventDefault();
    activatePage(`note/${noteLink.dataset.note}`, { updateHash: true, smoothScroll: true });
    return;
  }
  const shareNote = event.target.closest('[data-share-note]');
  if (shareNote) {
    event.preventDefault();
    const item = paperBySlug.get(shareNote.dataset.shareNote);
    if (item) openSharePanel(buildShareFromPaper(item));
    return;
  }

  const noteAction = event.target.closest('[data-note-action]');
  if (noteAction) {
    event.preventDefault();
    const slug = noteAction.dataset.noteSlug;
    const action = noteAction.dataset.noteAction;
    if (action === 'save') saveNoteDraft(slug);
    if (action === 'reset') resetNoteDraft(slug);
    if (action === 'copy') copyNoteDraft(slug);
    if (action === 'download') downloadNoteDraft(slug);
    return;
  }
  const link = event.target.closest('[data-page]');
  if (!link) return;
  event.preventDefault();
  activatePage(link.dataset.page, { updateHash: true, smoothScroll: true });
});

window.addEventListener('hashchange', () => {
  const hash = window.location.hash.replace('#', '').trim();
  if (['home-introduction', 'home-search', 'finish-notes', 'reading-queue', 'topic-summary'].includes(hash)) {
    activatePage('home', { updateHash: false, smoothScroll: false });
    document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    return;
  }
  const ok = activatePage(getPageFromHash(), { updateHash: false, smoothScroll: false });
  if (!ok) activatePage('home', { updateHash: false, smoothScroll: false });
});

const initialOk = activatePage(getPageFromHash(), { updateHash: false, smoothScroll: false });
if (!initialOk) activatePage('home', { updateHash: false, smoothScroll: false });

const initialHash = window.location.hash.replace('#', '').trim();
if (['home-introduction', 'home-search', 'finish-notes', 'reading-queue', 'topic-summary'].includes(initialHash)) {
  activatePage('home', { updateHash: false, smoothScroll: false });
  setTimeout(() => document.getElementById(initialHash)?.scrollIntoView({ behavior: 'auto', block: 'start' }), 0);
}

const filterRow = document.getElementById('filterRow');
const searchInput = document.getElementById('globalSearch');
const searchResults = document.getElementById('searchResults');
const searchSuggestions = document.getElementById('searchSuggestions');
const suggestedSearches = [
  ...new Set([
    ...topicKeys.map((key) => topics[key].title),
    'PORPOISE',
    'OmiCLIP',
    'CONCH',
    'TITAN',
    'GraphVelo',
    'MultiVeloVAE',
    'STORM',
    'Multi-Embed'
  ])
];
let activeFamily = 'All';


function renderSearchSuggestions() {
  if (!searchSuggestions) return;
  searchSuggestions.innerHTML = `
    <div class="suggestion-head">Suggested starting points</div>
    <div class="suggestion-pills">
      ${suggestedSearches.map((item, index) => `<button type="button" class="suggestion-chip chip-${(index % 12) + 1}" data-suggest="${escapeHTML(item)}">${escapeHTML(item)}</button>`).join('')}
    </div>
  `;
}

searchSuggestions?.addEventListener('click', (event) => {
  const chip = event.target.closest('[data-suggest]');
  if (!chip || !searchInput) return;
  searchInput.value = chip.dataset.suggest;
  searchInput.focus();
  renderSearchResults();
});

function renderFilters() {
  if (!filterRow) return;
  filterRow.innerHTML = families.map((family) => `<button class="filter-chip ${family === activeFamily ? 'active' : ''}" type="button" data-family="${escapeHTML(family)}">${escapeHTML(family)}</button>`).join('');
}

function renderSearchResults() {
  if (!searchResults) return;
  const query = (searchInput?.value || '').toLowerCase().trim();

  if (!query) {
    searchResults.innerHTML = '';
    searchResults.classList.add('is-empty');
    return;
  }

  const results = allPapers.filter((item) => {
    const text = `${item.title} ${item.venue} ${item.tags.join(' ')} ${item.excerpt} ${item.topicTitle} ${item.family}`.toLowerCase();
    const queryOk = text.includes(query);
    const familyOk = activeFamily === 'All' || item.family === activeFamily;
    return queryOk && familyOk;
  }).slice(0, 8);

  searchResults.classList.remove('is-empty');
  searchResults.innerHTML = results.length ? results.map(renderSearchItem).join('') : '<div class="empty-note">No matching paper yet.</div>';
}


function isPDFNote(url) {
  return typeof url === 'string' && url.toLowerCase().endsWith('.pdf');
}

function buildNoteHref(noteFile) {
  return isPDFNote(noteFile) ? `#reader/${encodeURIComponent(noteFile)}` : noteFile;
}

function buildNoteAttrs(noteFile) {
  return isPDFNote(noteFile) ? '' : ' target="_blank" rel="noopener noreferrer"';
}

function makePaperStyleId(paperItem) {
  return paperItem.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

function renderSearchItem(item) {
  return `
    <article class="paper-card paper-card-simple family-${item.tone}">
      <div class="paper-content">
        <div class="paper-meta"><span class="badge venue">${escapeHTML(item.venue)}</span><span class="badge">${escapeHTML(item.topicTitle)}</span><span class="badge">${escapeHTML(item.family)}</span></div>
        <h3 class="paper-title">${escapeHTML(item.title)}</h3>
      </div>
      <div class="paper-actions">
        <a class="paper-open paper-link" href="${item.url}" target="_blank" rel="noopener noreferrer">Paper</a>
        <a class="paper-open note-link" href="${buildNoteHref(item.noteFile)}"${buildNoteAttrs(item.noteFile)}>Note</a>
      </div>
    </article>
  `;
}

filterRow?.addEventListener('click', (event) => {
  const chip = event.target.closest('[data-family]');
  if (!chip) return;
  activeFamily = chip.dataset.family;
  renderFilters();
  renderSearchResults();
});
searchInput?.addEventListener('input', renderSearchResults);
renderFilters();
renderSearchSuggestions();
renderSearchResults();


const topicSummaryNotes = [
  {
    title: 'Pathology Foundation Models',
    desc: 'A synthesis note for UNI, Prov-GigaPath, Virchow, CHIEF, TITAN, and other WSI representation models.',
    meta: 'Computational Pathology · Foundation Models',
    href: 'notes_V1/Summary/PathologyFoundationModels.html',
    tone: 'path'
  },
  {
    title: 'Cell Foundation Models',
    desc: 'A cross-paper note for scGPT, Geneformer, Nicheformer, scPRINT, and atlas-scale biological pretraining.',
    meta: 'Computational Biology · Cell Models',
    href: 'notes_V1/Summary/CellFoundationModels.html',
    tone: 'bio'
  },
  {
    title: 'Pathology Language Models',
    desc: 'A reading synthesis for CONCH, PathChat, PLIP, and whole-slide multimodal reasoning systems.',
    meta: 'Computational Pathology · VLM',
    href: 'notes_V1/Summary/PathologyLanguageModels.html',
    tone: 'path'
  },
  {
    title: 'Histology Spatial Omics',
    desc: 'A topic note on visual omics, spatial transcriptomics, OmiCLIP, molecular maps, and tumor ecosystems.',
    meta: 'Pathology Omics · Spatial Biology',
    href: 'notes_V1/Summary/HistologySpatialOmics.html',
    tone: 'bridge'
  }
];

function renderTopicSummaryNotes() {
  const wrap = document.getElementById('topicSummaryNotes');
  if (!wrap) return;
  wrap.innerHTML = topicSummaryNotes.map((item, index) => `
    <a class="summary-note-card family-${item.tone}" href="${item.href}" target="_blank" rel="noopener noreferrer">
      <span class="summary-note-index">${String(index + 1).padStart(2, '0')}</span>
      <span class="summary-note-body">
        <strong>${escapeHTML(item.title)}</strong>
        <em>${escapeHTML(item.meta)}</em>
        <span>${escapeHTML(item.desc)}</span>
      </span>
      <span class="summary-note-arrow">↗</span>
    </a>
  `).join('');
}


const finishedNotes = [
  {
    date: '2026-05-19',
    title: 'A Visual Omics Foundation Model to Bridge Histopathology with Spatial Transcriptomics',
    venue: 'Nature Methods 2025',
    desc: 'OmiCLIP and Loki for visual-omics alignment and spatial molecular prediction.',
    href: 'notes/OmiCLIP.pdf',
    tags: ['OmiCLIP', 'Spatial Omics', 'Visual Omics'],
    tone: 'bridge'
  },
  {
    date: '2026-05-19',
    title: 'A Multimodal Foundation Model of Spatial Transcriptomics and Histology for Biological Discovery and Clinical Prediction',
    venue: 'arXiv 2026',
    desc: 'STORM for spatially aware H&E-ST foundation modeling and clinical prediction.',
    href: 'notes/STORM.pdf',
    tags: ['STORM', 'Histology ST', 'Clinical Prediction'],
    tone: 'bridge'
  },
  {
    date: '2026-05-19',
    title: 'Systematically Decoding Pathological Morphologies and Molecular Profiles with Unified Multimodal Embedding',
    venue: 'Nature Methods 2026',
    desc: 'Multi-Embed for morphology-molecule inference, integration, and prognosis.',
    href: 'notes/MultiEmbed.pdf',
    tags: ['Multi-Embed', 'Pathology Omics', 'Multimodal'],
    tone: 'bridge'
  },
  {
    date: '2026-05-18',
    title: 'Pan-Cancer Integrative Histology-Genomic Analysis via Multimodal Deep Learning',
    venue: 'Cancer Cell 2022',
    desc: 'PORPOISE and image-omic survival modeling.',
    href: 'notes/porpoise.pdf',
    tags: ['PORPOISE', 'Histology Genomics', 'Prognosis'],
    tone: 'path'
  }
];


const readingQueuePapers = [
  {
    venue: 'Nature Biotechnology 2022',
    title: 'Super-Resolved Spatial Transcriptomics by Deep Data Fusion',
    tags: ['XFuse', 'Super Resolution', 'Histology'],
    url: 'https://www.nature.com/articles/s41587-021-01075-3',
    noteFile: 'notes_V1/PathOmics/XFuse.html',
    topicTitle: 'Histology Spatial Omics',
    family: 'Pathology Omics',
    tone: 'bridge'
  },
  {
    venue: 'Nature Biotechnology 2024',
    title: 'Inferring Super-Resolution Tissue Architecture by Integrating Spatial Transcriptomics with Histology',
    tags: ['iStar', 'Super Resolution', 'Tissue Architecture'],
    url: 'https://www.nature.com/articles/s41587-023-02019-9',
    noteFile: 'notes_V1/PathOmics/iStar.html',
    topicTitle: 'Histology Spatial Omics',
    family: 'Pathology Omics',
    tone: 'bridge'
  },
  {
    venue: 'Nature Communications 2026',
    title: 'SpatialCOC: An Integrative Framework for Spatial Continuous Mapping and Cross-Omics Correction in Spatial Multi-Omics Data',
    tags: ['SpatialCOC', 'Cross Omics', 'Continuous Mapping'],
    url: 'https://www.nature.com/articles/s41467-026-71882-2',
    noteFile: 'notes_V1/PathOmics/SpatialCOC.html',
    topicTitle: 'Multiomics Integration',
    family: 'Computational Biology',
    tone: 'bio'
  },
  {
    venue: 'Nature Communications 2026',
    title: 'FineST: Contrastive Learning Integrates Histology and Spatial Transcriptomics for Nuclei-Resolved Ligand-Receptor Analysis',
    tags: ['FineST', 'Ligand Receptor', 'Nuclei Resolved'],
    url: 'https://www.nature.com/articles/s41467-026-70528-7',
    noteFile: 'notes_V1/PathOmics/FineST.html',
    topicTitle: 'Histology Spatial Omics',
    family: 'Pathology Omics',
    tone: 'bridge'
  }
];

function renderQueueItem(item, index) {
  const tags = item.tags.slice(0, 3).map((tag) => `<span class="queue-tag">${escapeHTML(tag)}</span>`).join('');
  return `
    <article class="queue-card family-${item.tone}">
      <div class="queue-index">${String(index + 1).padStart(2, '0')}</div>
      <div class="queue-main">
        <div class="queue-meta"><span>${escapeHTML(item.venue)}</span>${tags}</div>
        <h3>${escapeHTML(item.title)}</h3>
        <p>Queued for later reading · ${escapeHTML(item.topicTitle)}</p>
      </div>
      <div class="queue-actions">
        <a class="paper-open paper-link" href="${item.url}" target="_blank" rel="noopener noreferrer">Paper</a>
        <a class="paper-open note-link" href="${buildNoteHref(item.noteFile)}"${buildNoteAttrs(item.noteFile)}>Note</a>
      </div>
    </article>
  `;
}

function renderFinishNotes() {
  const wrap = document.getElementById('finishNotes');
  if (!wrap) return;
  wrap.innerHTML = finishedNotes.map((item) => `
    <a class="finish-item family-${item.tone || 'default'}" href="${buildNoteHref(item.href)}"${buildNoteAttrs(item.href)}>
      <time>${escapeHTML(item.date)}</time>
      <div class="finish-dot" aria-hidden="true"></div>
      <div class="finish-body">
        <strong>${escapeHTML(item.title)}</strong>
        <em>${escapeHTML(item.venue)}</em>
        <div class="finish-tags">${item.tags.map((tag, index) => `<small class="finish-tag finish-tag-${(index % 6) + 1}">${escapeHTML(tag)}</small>`).join('')}</div>
      </div>
      <span class="finish-open">Open</span>
    </a>
  `).join('');
}

function renderHomeCollections() {
  const queue = document.getElementById('readingQueue');
  if (queue) {
    queue.innerHTML = readingQueuePapers.map(renderQueueItem).join('');
  }
  renderFinishNotes();
}
renderHomeCollections();

renderTopicSummaryNotes();


function renderMiniStats() {
  const miniStats = document.getElementById('miniStats');
  if (!miniStats) return;
  const natureCount = allPapers.filter((item) => item.venue.toLowerCase().includes('nature')).length;
  miniStats.innerHTML = [
    ['Papers', allPapers.length],
    ['Nature Portfolio', natureCount],
    ['Topics', topicKeys.length]
  ].map(([name, value]) => `
    <span class="mini-stat">
      <strong>${value}</strong>
      <em>${name}</em>
    </span>
  `).join('');
}
renderMiniStats();

function setTheme(theme) {
  root.setAttribute('data-theme', theme);
  localStorage.setItem('readingNotesTheme', theme);
  const isDark = theme === 'dark';
  const text = document.getElementById('themeToggleText');
  const icon = document.getElementById('themeToggleIcon');
  if (text) text.textContent = isDark ? 'Day mode' : 'Night mode';
  if (icon) icon.textContent = isDark ? '☀' : '☾';
}
const storedTheme = localStorage.getItem('readingNotesTheme');
setTheme(storedTheme || 'light');
document.getElementById('themeToggle')?.addEventListener('click', () => {
  setTheme(root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
});

function updateLocalVisits() {
  const key = 'readingNotesLocalVisits';
  const visits = Number(localStorage.getItem(key) || '0') + 1;
  localStorage.setItem(key, String(visits));
  const badge = document.getElementById('localVisitBadge');
  if (badge) badge.textContent = String(visits);
}
updateLocalVisits();

const sharePanel = document.getElementById('sharePanel');
const shareToggle = document.getElementById('shareToggle');
const heroShareButton = document.getElementById('heroShareButton');
const shareClose = document.getElementById('shareClose');
const shareToast = document.getElementById('shareToast');
const qrWrap = document.getElementById('qrWrap');
const qrImage = document.getElementById('qrImage');
const pageTitle = document.title;

function showToast(message) {
  if (!shareToast) return;
  shareToast.textContent = message;
}

function updateSharePreview() {
  const preview = document.querySelector('.share-preview');
  if (!preview) return;
  preview.classList.remove('share-bio', 'share-path', 'share-bridge');
  if (currentShare.tone) preview.classList.add(`share-${currentShare.tone}`);
  const top = preview.querySelector('.share-preview-top');
  const title = preview.querySelector('.share-preview-title');
  const desc = preview.querySelector('p');
  const pills = preview.querySelector('.share-preview-pills');
  if (top) top.textContent = 'Ye Zhang · Reading Notes';
  if (title) title.textContent = currentShare.title;
  if (desc) desc.textContent = currentShare.subtitle;
  if (pills) pills.innerHTML = (currentShare.tags || []).slice(0, 4).map((tag) => `<span>${escapeHTML(tag)}</span>`).join('');
  const previewQR = document.getElementById('sharePreviewQR');
  if (previewQR) previewQR.src = `https://api.qrserver.com/v1/create-qr-code/?size=180x180&margin=8&data=${encodeURIComponent(currentShare.url)}`;
}

function configureShareLinks() {
  const encodedUrl = encodeURIComponent(currentShare.url);
  const encodedText = encodeURIComponent(`${currentShare.title}\n${currentShare.subtitle}`);
  const twitter = document.getElementById('shareTwitter');
  const linkedin = document.getElementById('shareLinkedin');
  if (twitter) twitter.href = `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedText}`;
  if (linkedin) linkedin.href = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`;
}
function openSharePanel(shareTarget = null) {
  if (!sharePanel) return;
  if (shareTarget) currentShare = shareTarget;
  updateSharePreview();
  configureShareLinks();
  sharePanel.classList.add('open');
  sharePanel.setAttribute('aria-hidden', 'false');
}
function closeSharePanel() {
  if (!sharePanel) return;
  sharePanel.classList.remove('open');
  sharePanel.setAttribute('aria-hidden', 'true');
  if (qrWrap) qrWrap.hidden = true;
  showToast('');
}
async function copyText(text, message) {
  try {
    await navigator.clipboard.writeText(text);
    showToast(message);
  } catch (error) {
    showToast('Copy failed. Please copy the browser address manually.');
  }
}

function downloadShareCard() {
  const safeTitle = escapeHTML(currentShare.title || 'Reading Notes');
  const safeSubtitle = escapeHTML(currentShare.subtitle || 'Computational biology and computational pathology');
  const tagText = (currentShare.tags || []).slice(0, 4).map((tag, i) =>
    `<text x="${80 + i * 210}" y="540" fill="#f7fbff" font-family="Inter, Arial" font-size="18" font-weight="700">${escapeHTML(tag)}</text>
     <rect x="${62 + i * 210}" y="512" width="${Math.max(112, String(tag).length * 10 + 42)}" height="42" rx="21" fill="none" stroke="#ffffff" stroke-opacity="0.26"/>`
  ).join('');

  const svg = `<?xml version="1.0" encoding="UTF-8"?>
  <svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
    <defs>
      <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
        <stop stop-color="#dff4ff"/>
        <stop offset="0.42" stop-color="#c8eadf"/>
        <stop offset="1" stop-color="#fff7d6"/>
      </linearGradient>
      <linearGradient id="card" x1="0" y1="0" x2="1" y2="1">
        <stop stop-color="#10294e"/>
        <stop offset="0.55" stop-color="#163f65"/>
        <stop offset="1" stop-color="#2d6b58"/>
      </linearGradient>
      <radialGradient id="glow" cx="12%" cy="8%" r="76%">
        <stop stop-color="#8fd3ff" stop-opacity="0.55"/>
        <stop offset="1" stop-color="#8fd3ff" stop-opacity="0"/>
      </radialGradient>
      <pattern id="grid" width="34" height="34" patternUnits="userSpaceOnUse">
        <path d="M 34 0 L 0 0 0 34" fill="none" stroke="#ffffff" stroke-width="1" stroke-opacity="0.075"/>
      </pattern>
    </defs>
    <rect width="1200" height="630" fill="url(#bg)"/>
    <rect x="38" y="34" width="1124" height="562" rx="48" fill="url(#card)"/>
    <rect x="38" y="34" width="1124" height="562" rx="48" fill="url(#glow)"/>
    <rect x="38" y="34" width="1124" height="562" rx="48" fill="url(#grid)"/>
    <rect x="72" y="68" width="1056" height="494" rx="34" fill="none" stroke="#ffffff" stroke-opacity="0.18"/>
    <circle cx="116" cy="116" r="34" fill="#ffffff" fill-opacity="0.14"/>
    <text x="162" y="110" fill="#ffffff" font-family="Inter, Arial" font-size="27" font-weight="800">Ye Zhang</text>
    <text x="162" y="142" fill="#d9e9f8" font-family="Inter, Arial" font-size="18">Reading Notes · Path Omics AI</text>
    <rect x="950" y="82" width="132" height="132" rx="24" fill="#ffffff" fill-opacity="0.92"/>
    <g transform="translate(972 104)" fill="#10294e">
      <rect x="0" y="0" width="22" height="22"/><rect x="72" y="0" width="22" height="22"/><rect x="0" y="72" width="22" height="22"/>
      <rect x="34" y="8" width="10" height="10"/><rect x="52" y="18" width="10" height="10"/><rect x="22" y="36" width="10" height="10"/><rect x="62" y="46" width="10" height="10"/>
      <rect x="40" y="68" width="10" height="10"/><rect x="76" y="74" width="10" height="10"/><rect x="18" y="58" width="10" height="10"/>
    </g>
    <text x="80" y="300" fill="#ffffff" font-family="Inter, Arial" font-size="18" font-weight="800" letter-spacing="7">YE ZHANG · READING NOTES</text>
    <foreignObject x="80" y="330" width="900" height="150">
      <div xmlns="http://www.w3.org/1999/xhtml" style="font-family: Inter, Arial, sans-serif; color:#fff; font-size:56px; line-height:1.03; font-weight:850; letter-spacing:-2.2px;">${safeTitle}</div>
    </foreignObject>
    <foreignObject x="80" y="464" width="880" height="52">
      <div xmlns="http://www.w3.org/1999/xhtml" style="font-family: Inter, Arial, sans-serif; color:#d7e7f4; font-size:24px; line-height:1.35;">${safeSubtitle}</div>
    </foreignObject>
    ${tagText}
    <text x="906" y="540" fill="#d7e7f4" font-family="IBM Plex Mono, Menlo, monospace" font-size="21">zhangye-zoe.github.io</text>
  </svg>`;

  const blob = new Blob([svg], {type:'image/svg+xml'});
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = `${slugify(currentShare.title || 'reading-note')}-share-card.svg`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(link.href), 1000);
  showToast('Share card downloaded.');
}

shareToggle?.addEventListener('click', () => openSharePanel());
heroShareButton?.addEventListener('click', () => openSharePanel());
shareClose?.addEventListener('click', closeSharePanel);
sharePanel?.addEventListener('click', (event) => {
  if (event.target === sharePanel) closeSharePanel();
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closeSharePanel();
});

document.querySelectorAll('[data-share]').forEach((button) => {
  button.addEventListener('click', async () => {
    const type = button.dataset.share;
    configureShareLinks();
    if (type === 'native') {
      if (navigator.share) {
        try {
          await navigator.share({ title: currentShare.title || pageTitle, text: currentShare.subtitle, url: currentShare.url });
          showToast('Shared successfully.');
        } catch (error) {
          showToast('Share cancelled.');
        }
      } else {
        await copyText(currentShare.url, 'Native share is unavailable. Link copied instead.');
      }
    }
    if (type === 'copy') await copyText(currentShare.url, 'Link copied.');
    if (type === 'wechat') {
      if (qrImage) qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(currentShare.url)}`;
      if (qrWrap) qrWrap.hidden = false;
      showToast('WeChat QR code is ready.');
    }
    if (type === 'rednote') await copyText(`${currentShare.title}\n${currentShare.subtitle}\n${currentShare.url}`, 'Share text copied for RedNote.');
    if (type === 'card') downloadShareCard();
  });
});


function initSidebarResize() {
  const resizer = document.getElementById('sidebarResizer');
  if (!resizer) return;
  const savedWidth = localStorage.getItem('readingNotesSidebarWidth');
  if (savedWidth) root.style.setProperty('--sidebar-width', `${savedWidth}px`);

  let startX = 0;
  let startWidth = 0;
  let dragging = false;

  const clamp = (value) => Math.min(420, Math.max(244, value));
  const move = (event) => {
    if (!dragging) return;
    const clientX = event.touches ? event.touches[0].clientX : event.clientX;
    const nextWidth = clamp(startWidth + clientX - startX);
    root.style.setProperty('--sidebar-width', `${nextWidth}px`);
    localStorage.setItem('readingNotesSidebarWidth', String(nextWidth));
  };
  const stop = () => {
    dragging = false;
    document.body.classList.remove('is-resizing-sidebar');
    window.removeEventListener('mousemove', move);
    window.removeEventListener('mouseup', stop);
    window.removeEventListener('touchmove', move);
    window.removeEventListener('touchend', stop);
  };
  const start = (event) => {
    if (window.matchMedia('(max-width: 1080px)').matches) return;
    dragging = true;
    startX = event.touches ? event.touches[0].clientX : event.clientX;
    startWidth = parseInt(getComputedStyle(root).getPropertyValue('--sidebar-width'), 10) || 284;
    document.body.classList.add('is-resizing-sidebar');
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseup', stop);
    window.addEventListener('touchmove', move, { passive: false });
    window.addEventListener('touchend', stop);
    event.preventDefault();
  };
  resizer.addEventListener('mousedown', start);
  resizer.addEventListener('touchstart', start, { passive: false });
  resizer.addEventListener('dblclick', () => {
    root.style.setProperty('--sidebar-width', '304px');
    localStorage.setItem('readingNotesSidebarWidth', '304');
  });
}

const backToTop = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
  if (!backToTop) return;
  backToTop.classList.toggle('show', window.scrollY > 360);
});
backToTop?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

initSidebarResize();

updateSharePreview();

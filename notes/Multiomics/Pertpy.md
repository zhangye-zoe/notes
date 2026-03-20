# Pertpy: an end-to-end framework for perturbation analysis

> **Note date:** 2026-01-11
> **Category:** Multi-omics
> **Tags:** integration, latent space, cancer, pathology, representation learning

---

## 📄 Paper Meta

| Item             | Details                                                                  |
| ---------------- | ------------------------------------------------------------------------ |
| **Paper**        | Pertpy: an end-to-end framework for perturbation analysis |
| **Authors**      | First Author *et al.*                                                    |
| **Venue / Year** | NeurIPS 2024 / Nature 2023 / …                                           |
| **Links**        | [Paper](#) · [Code](#)                                                   |
| **Topic**        | multi-omics integration · representation learning · cancer               |

---

## 1. Overview

This note summarizes a representative paper on **multi-omics integration** for cancer.
The main idea is to learn a **shared latent space** that aligns histology images with RNA-seq (and other omics), while retaining clinically meaningful biological information.

### 🔑 Key Idea (my own words)

> **Learn a shared latent representation `z` that aligns image and omics views, is predictive of clinical outcomes, and disentangles biology from batch effects.**

---

## 2. Data & Modalities

### 2.1 Cohort

* Whole-slide images (FFPE / frozen)
* Bulk RNA-seq (TPM/counts)
* Clinical variables
* (Optional) CNV / mutation data

### 2.2 Preprocessing

* Tile WSIs → patch features (ResNet/Foundation Model)
* Aggregate patch features → slide-level embedding (attention pooling / mean pooling)
* RNA features: log-transformed genes or selected panels
* All omics: z-score normalized

> **Figure (optional)**
> *Insert your cohort diagram here:*
> `![Cohort overview](images/example_cohort_diagram.png)`

---

## 3. Method & Objective

### 3.1 Shared Latent Space

Encoders:

```text
f_img(x_img)   → z
f_omics(x_omics) → z
```

Goal: `z_img ≈ z_omics`, capturing biological signals consistent across modalities.

### 💡 Simplified formulation

> Learn encoders **f_img**, **f_omics**, and task head **g** such that
> `z_img = f_img(x_img)`, `z_omics = f_omics(x_omics)`,
> and enforce **alignment + prediction + task supervision**.

---

### 3.2 Loss Functions

* **Alignment loss**
  Contrastive / cosine / CCA-like loss
* **Cross-modal prediction / reconstruction**
* **Task loss**
  Subtype (CE), survival (Cox)
* **Regularization**
  Remove batch effects and confounders

#### Example loss table

| Model       | Alignment   | Task Loss | Notes       |
| ----------- | ----------- | --------- | ----------- |
| Image only  | –           | CE/Cox    | Baseline    |
| RNA only    | –           | CE/Cox    | Baseline    |
| Joint model | Contrastive | CE + Cox  | Full method |

---

## 4. Key Results

* Integrated latent space > unimodal baselines (image-only, RNA-only)
* Better subtype prediction and survival stratification
* UMAP/t-SNE clusters correspond to morphology + expression subgroups
* Cross-modal prediction recovers major signatures (immune, stromal)

> **Figure (optional)**
> `![Latent space UMAP](images/example_latent_umap.png)`

---

## 5. My Notes & Takeaways

* Easy to extend: ATAC, DNA methylation, spatial transcriptomics
* Alignment losses must be balanced — avoid over-smoothing modality-specific signals
* Patch-level heterogeneity suggests combining MIL or ROI-based modeling
* Survival gains may come partly from information compression, not pure biology

### 🔗 Connection to my work

* Useful reference for **designing alignment + task losses**
* Insightful structure for **subtype + survival evaluation**
* Potential extension via **graph encoders** for spatial or single-cell data

---

## 6. Open Questions for Future Work

1. How to extend this to **spatial** or **single-cell** datasets with partial matches?
2. Can we explicitly disentangle **shared vs modality-specific** latents?
3. Better to pretrain image encoder first, or train an end-to-end multimodal model?
4. How to evaluate if latent space captures **causal** biology?
5. How robust is the model to **site effects** and **batch variability**?

---

## 📌 Appendix (Optional)

### A. Pseudocode of training loop

### B. Setup notes for experiments

### C. Additional figures



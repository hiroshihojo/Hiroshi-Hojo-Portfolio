---
title: "Predicting Band Gaps from Composition with the Materials Project"
summary: "A regression model over Materials Project data, exploring which structural and compositional features drive band gap in semiconductor compounds."
method: "Data · pymatgen + Materials Project API"
track: "computation"
date: 2026-08-01
status: "planned"
featured: true
order: 2
---

## Context

_Why this dataset, why this material family (e.g. III-V compounds, halide perovskites). One or two sentences on the engineering question you're asking — e.g. "can composition alone predict band gap well enough to guide candidate screening?"_

## Method

- Pulled [N] entries for [material family] via the Materials Project API
- Features used: composition, structure descriptors, [others]
- Model: [linear regression / random forest / etc.], validated via [k-fold, train-test split]
- Tools: Python, pymatgen, scikit-learn, pandas

## Results

_Insert your key plot — e.g. predicted vs. actual band gap, feature importance chart._

![Describe your key figure here](/images/projects/mp-bandgap-result.png)

Report your headline metric (R², MAE) plainly, then one sentence on what it means physically.

## Materials-relevant takeaway

_Connect back to semiconductor engineering practice — e.g. how this kind of screening supports candidate selection for a specific application (absorbers, wide-bandgap devices, etc.)._

## What I'd do next

_E.g. add DFT-validated features, extend to a different material family, or compare against a physically motivated model._

## Code

[Link to GitHub repository](#)

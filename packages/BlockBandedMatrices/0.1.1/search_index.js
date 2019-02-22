var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#BlockBandedMatrices.jl-1",
    "page": "Readme",
    "title": "BlockBandedMatrices.jl",
    "category": "section",
    "text": "A Julia package for representing block-block-banded matrices and banded-block-banded matrices(Image: Build Status)<!– (Image: )–> (Image: )This package supports representing block-banded and banded-block-banded matrices by only storing the entries in the non-zero bands.A BlockBandedMatrix is a subtype of BlockMatrix of BlockArrays.jl whose non-zero blocks are banded. We can construct a BlockBandedMatrix as follows:l,u = 2,1          # block bandwidths\nN = M = 4          # number of row/column blocks\ncols = rows = 1:N  # block sizes\n\nBlockBandedMatrix(Zeros(sum(rows),sum(cols)), (rows,cols), (l,u)) # creates a block-banded matrix of zeros\nBlockBandedMatrix(Zeros(sum(rows),sum(cols)), (rows,cols), (l,u)) # creates a block-banded matrix with ones in the non-zero entries\nBlockBandedMatrix(I, (rows,cols), (l,u))                          # creates a block-banded  identity matrixA BandedBlockBandedMatrix has the added structure that the blocks themselves are banded, and conform to the banded matrix interface of BandedMatrices.jl. We can construct a BandedBlockBandedMatrix as follows:l,u = 2,1          # block bandwidths\nλ,μ = 1,2          # sub-block bandwidths: the bandwidths of each block\nN = M = 4          # number of row/column blocks\ncols = rows = 1:N  # block sizes\nBandedBlockBandedMatrix(Zeros(sum(rows),sum(cols)), (rows,cols), (l,u), (λ,μ)) # creates a banded-block-banded matrix of zeros\nBandedBlockBandedMatrix(Ones(sum(rows),sum(cols)), (rows,cols), (l,u), (λ,μ))  # creates a banded-block-banded matrix with ones in the non-zero entries\nBandedBlockBandedMatrix(I, (rows,cols), (l,u), (λ,μ)))                         # creates a banded-block-banded identity matrix"
},

]}

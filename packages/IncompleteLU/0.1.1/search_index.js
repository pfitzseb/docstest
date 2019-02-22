var documenterSearchIndex = {"docs": [

{
    "location": "autodocs/#IncompleteLU.InsertableSparseVector",
    "page": "Docstrings",
    "title": "IncompleteLU.InsertableSparseVector",
    "category": "type",
    "text": "InsertableSparseVector accumulates the sparse vector result from SpMV. Initialization requires O(N) work, therefore the data structure is reused. Insertion requires O(nnz) at worst, as insertion sort is used.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#IncompleteLU.LinkedLists",
    "page": "Docstrings",
    "title": "IncompleteLU.LinkedLists",
    "category": "type",
    "text": "The factor L is stored column-wise, but we need all nonzeros in row row. We already keep track of  the first nonzero in each column (at most n indices). Take l = LinkedLists(n). Let l.head[row] be the column of some nonzero in row row. Then we can store the column of the next nonzero of row row in l.next[l.head[row]], etc. That \"spot\" is empty and there will never be a conflict because as long as we only store the first nonzero per column:  the column is then a unique identifier.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#IncompleteLU.SortedSet",
    "page": "Docstrings",
    "title": "IncompleteLU.SortedSet",
    "category": "type",
    "text": "SortedSet keeps track of a sorted set of integers ≤ N using insertion sort with a linked list structure in a pre-allocated  vector. Requires O(N + 1) memory. Insertion goes via a linear scan in O(n) where n is the number of stored elements, but can be accelerated  by passing along a known value in the set (which is useful when pushing in an already sorted list). The insertion itself requires O(1) operations due to the linked list structure. Provides iterators:\n\nints = SortedSet(10)\npush!(ints, 5)\npush!(ints, 3)\nfor value in ints\n    println(value)\nend\n\n\n\n\n\n"
},

{
    "location": "autodocs/#IncompleteLU.add!",
    "page": "Docstrings",
    "title": "IncompleteLU.add!",
    "category": "function",
    "text": "Sets v[idx] += a when idx is occupied, or sets v[idx] = a. Complexity is O(1).\n\n\n\n\n\nSets v[idx] += a when idx is occupied, or sets v[idx] = a. Complexity is O(nnz). The prev_idx can be used to start the linear search at prev_idx, useful when multiple already sorted values are added.\n\n\n\n\n\nAdd without providing a previous index.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#IncompleteLU.append_col!",
    "page": "Docstrings",
    "title": "IncompleteLU.append_col!",
    "category": "function",
    "text": "Basically A[:, j] = scale * drop(y), where drop removes values less than drop. Note: sorts the nzind\'s of y,  so that the column can be appended to a SparseMatrixCSC.\n\nResets the SparseVectorAccumulator.\n\nNote: does not update A.colptr for columns > j + 1, as that is done during the steps.\n\n\n\n\n\nBasically A[:, j] = scale * drop(y), where drop removes values less than drop.\n\nResets the InsertableSparseVector.\n\nNote: does not update A.colptr for columns > j + 1, as that is done during the steps.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#IncompleteLU.forward_substitution_without_diag!",
    "page": "Docstrings",
    "title": "IncompleteLU.forward_substitution_without_diag!",
    "category": "function",
    "text": "Applies in-place forward substitution with the L factor, under the assumptions:\n\nL is stored column-wise (unlike U)\nL has no upper triangular elements\nL has no diagonal elements\n\n\n\n\n\n"
},

{
    "location": "autodocs/#IncompleteLU.isoccupied",
    "page": "Docstrings",
    "title": "IncompleteLU.isoccupied",
    "category": "function",
    "text": "Check whether idx is nonzero.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#IncompleteLU.transposed_backward_substitution!",
    "page": "Docstrings",
    "title": "IncompleteLU.transposed_backward_substitution!",
    "category": "function",
    "text": "Applies in-place backward substitution with the U factor, under the assumptions: \n\nU is stored transposed / row-wise\nU has no lower-triangular elements stored\nU has (nonzero) diagonal elements stored.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "IncompleteLU.ILUFactorizationIncompleteLU.IncompleteLUIncompleteLU.InsertableSparseVectorIncompleteLU.LinkedListsIncompleteLU.RowReaderIncompleteLU.SortedSetIncompleteLU.SparseVectorAccumulatorIncompleteLU.add!IncompleteLU.append_col!IncompleteLU.enqueue_next_nonzero!IncompleteLU.evalIncompleteLU.first_in_rowIncompleteLU.forward_substitution_without_diag!IncompleteLU.has_next_nonzeroIncompleteLU.iluIncompleteLU.includeIncompleteLU.indicesIncompleteLU.is_columnIncompleteLU.isoccupiedIncompleteLU.next_columnIncompleteLU.next_row!IncompleteLU.nzidxIncompleteLU.nzrowIncompleteLU.nzvalIncompleteLU.transposed_backward_substitution!"
},

]}

var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#AWSS3-1",
    "page": "Readme",
    "title": "AWSS3",
    "category": "section",
    "text": "AWS S3 Interface for Julia(Image: Build Status)Documentationusing AWSS3\n\naws = AWSCore.aws_config()\n\ns3_create_bucket(aws, \"my.bucket\")\ns3_enable_versioning(aws, \"my.bucket\")\n\ns3_put(aws, \"my.bucket\", \"key\", \"Hello!\")\nprintln(s3_get(aws, \"my.bucket\", \"key\"))"
},

{
    "location": "autodocs/#AWSS3.s3_arn",
    "page": "Docstrings",
    "title": "AWSS3.s3_arn",
    "category": "function",
    "text": "s3_arn(resource)\ns3_arn(bucket,path)\n\nAmazon Resource Name for S3 resource or bucket and path.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AWSS3.s3_copy",
    "page": "Docstrings",
    "title": "AWSS3.s3_copy",
    "category": "function",
    "text": "s3_copy([::AWSConfig], bucket, path; to_bucket=bucket, to_path=path)\n\nPUT Object - Copy\n\nOptional Arguments\n\nmetadata::Dict=; optional x-amz-meta- headers.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AWSS3.s3_create_bucket",
    "page": "Docstrings",
    "title": "AWSS3.s3_create_bucket",
    "category": "function",
    "text": "s3_create_bucket([:AWSConfig], bucket)\n\nPUT Bucket\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AWSS3.s3_delete",
    "page": "Docstrings",
    "title": "AWSS3.s3_delete",
    "category": "function",
    "text": "s3_delete([::AWSConfig], bucket, path; [version=]\n\nDELETE Object\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AWSS3.s3_delete_bucket",
    "page": "Docstrings",
    "title": "AWSS3.s3_delete_bucket",
    "category": "function",
    "text": "s3_delete_bucket([::AWSConfig], \"bucket\")\n\nDELETE Bucket.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AWSS3.s3_delete_tags",
    "page": "Docstrings",
    "title": "AWSS3.s3_delete_tags",
    "category": "function",
    "text": "s3_delete_tags([::AWSConfig], bucket, [path])\n\nDelete tags from bucket or object (path).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AWSS3.s3_enable_versioning",
    "page": "Docstrings",
    "title": "AWSS3.s3_enable_versioning",
    "category": "function",
    "text": "s3_enable_versioning([::AWSConfig], bucket)\n\nEnable versioning for bucket.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AWSS3.s3_exists",
    "page": "Docstrings",
    "title": "AWSS3.s3_exists",
    "category": "function",
    "text": "s3_exists([::AWSConfig], bucket, path [version=])\n\nIs there an object in bucket at path?\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AWSS3.s3_get",
    "page": "Docstrings",
    "title": "AWSS3.s3_get",
    "category": "function",
    "text": "s3_get([::AWSConfig], bucket, path; <keyword arguments>)\n\nGet Object from path in bucket.\n\nOptional Arguments\n\nversion=: version of object to get.\nretry=true: try again on \"NoSuchBucket\", \"NoSuchKey\"               (common if object was recently created).\nraw=false:  return response as Vector{UInt8}               (by default return type depends on Content-Type header).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AWSS3.s3_get_file",
    "page": "Docstrings",
    "title": "AWSS3.s3_get_file",
    "category": "function",
    "text": "s3_get_file([::AWSConfig], bucket, path, filename; [version=])\n\nLike s3_get but streams result directly to filename.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AWSS3.s3_get_meta",
    "page": "Docstrings",
    "title": "AWSS3.s3_get_meta",
    "category": "function",
    "text": "s3getmeta([::AWSConfig], bucket, path; [version=])\n\nHEAD Object\n\nRetrieves metadata from an object without returning the object itself.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AWSS3.s3_get_tags",
    "page": "Docstrings",
    "title": "AWSS3.s3_get_tags",
    "category": "function",
    "text": "s3_get_tags([::AWSConfig], bucket, [path])\n\nGet tags from bucket or object (path).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AWSS3.s3_list_buckets",
    "page": "Docstrings",
    "title": "AWSS3.s3_list_buckets",
    "category": "function",
    "text": "s3_list_buckets([::AWSConfig])\n\nList of all buckets owned by the sender of the request.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AWSS3.s3_list_keys",
    "page": "Docstrings",
    "title": "AWSS3.s3_list_keys",
    "category": "function",
    "text": "s3_list_keys([::AWSConfig], bucket, [path_prefix])\n\nLike s3_list_objects but returns object keys as Vector{String}.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AWSS3.s3_list_objects",
    "page": "Docstrings",
    "title": "AWSS3.s3_list_objects",
    "category": "function",
    "text": "s3_list_objects([::AWSConfig], bucket, [path_prefix])\n\nList Objects in bucket with optional path_prefix.\n\nReturns Vector{Dict} with keys Key, LastModified, ETag, Size, Owner, StorageClass.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AWSS3.s3_list_versions",
    "page": "Docstrings",
    "title": "AWSS3.s3_list_versions",
    "category": "function",
    "text": "s3_list_versions([::AWSConfig], bucket, [path_prefix])\n\nList object versions in bucket with optional path_prefix.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AWSS3.s3_purge_versions",
    "page": "Docstrings",
    "title": "AWSS3.s3_purge_versions",
    "category": "function",
    "text": "s3_purge_versions([::AWSConfig], bucket, [path [, pattern]])\n\nDELETE all object versions except for the latest version.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AWSS3.s3_put",
    "page": "Docstrings",
    "title": "AWSS3.s3_put",
    "category": "function",
    "text": "s3_put([::AWSConfig], bucket, path, data; <keyword arguments>\n\nPUT Object data at path in bucket.\n\nOptional Arguments\n\ndata_type=; Content-Type header.\nencoding=; Content-Encoding header.\nmetadata::Dict=; x-amz-meta- headers.\ntags::Dict=; x-amz-tagging- headers                (see also s3_put_tags and s3_get_tags).\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AWSS3.s3_put_cors",
    "page": "Docstrings",
    "title": "AWSS3.s3_put_cors",
    "category": "function",
    "text": "s3_put_cors([::AWSConfig], bucket, cors_config)\n\nPUT Bucket cors\n\ns3_put_cors(\"my_bucket\", \"\"\"\n    <?xml version=\"1.0\" encoding=\"UTF-8\"?>\n    <CORSConfiguration xmlns=\"http://s3.amazonaws.com/doc/2006-03-01/\">\n        <CORSRule>\n            <AllowedOrigin>http://my.domain.com</AllowedOrigin>\n            <AllowedOrigin>http://my.other.domain.com</AllowedOrigin>\n            <AllowedMethod>GET</AllowedMethod>\n            <AllowedMethod>HEAD</AllowedMethod>\n            <AllowedHeader>*</AllowedHeader>\n            <ExposeHeader>Content-Range</ExposeHeader>\n        </CORSRule>\n    </CORSConfiguration>\n\"\"\"\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AWSS3.s3_put_tags",
    "page": "Docstrings",
    "title": "AWSS3.s3_put_tags",
    "category": "function",
    "text": "s3_put_tags([::AWSConfig], bucket, [path,] tags::Dict)\n\nPUT tags on bucket or object (path).\n\nSee also tags= option on s3_put.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#AWSS3.s3_sign_url",
    "page": "Docstrings",
    "title": "AWSS3.s3_sign_url",
    "category": "function",
    "text": "s3_sign_url([::AWSConfig], bucket, path, [seconds=3600];\n            [verb=\"GET\"], [content_type=\"application/octet-stream\"])\n\nCreate a pre-signed url for bucket and path (expires after for seconds).\n\nTo create an upload URL use verb=\"PUT\" and set content_type to match the type used in the Content-Type header of the PUT request.\n\nurl = s3_sign_url(\"my_bucket\", \"my_file.txt\"; verb=\"PUT\")\nRequests.put(URI(url), \"Hello!\")\n\nurl = s3_sign_url(\"my_bucket\", \"my_file.txt\";\n                  verb=\"PUT\", content_type=\"text/plain\")\n\nRequests.put(URI(url), \"Hello!\";\n             headers=Dict(\"Content-Type\" => \"text/plain\"))\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "AWSS3.AWSS3AWSS3.SSDictAWSS3.evalAWSS3.includeAWSS3.s3AWSS3.s3_arnAWSS3.s3_begin_multipart_uploadAWSS3.s3_complete_multipart_uploadAWSS3.s3_copyAWSS3.s3_create_bucketAWSS3.s3_deleteAWSS3.s3_delete_bucketAWSS3.s3_delete_tagsAWSS3.s3_enable_versioningAWSS3.s3_existsAWSS3.s3_getAWSS3.s3_get_fileAWSS3.s3_get_metaAWSS3.s3_get_tagsAWSS3.s3_list_bucketsAWSS3.s3_list_keysAWSS3.s3_list_objectsAWSS3.s3_list_versionsAWSS3.s3_multipart_uploadAWSS3.s3_purge_versionsAWSS3.s3_putAWSS3.s3_put_corsAWSS3.s3_put_tagsAWSS3.s3_sign_urlAWSS3.s3_upload_part"
},

]}

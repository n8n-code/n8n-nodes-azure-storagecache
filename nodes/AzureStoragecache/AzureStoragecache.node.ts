import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';


export class AzureStoragecache implements INodeType {
        description: INodeTypeDescription = {
                displayName: 'Azure Storagecache',
                name: 'N8nDevAzureStoragecache',
                icon: { light: 'file:./azure-storagecache.png', dark: 'file:./azure-storagecache.dark.png' },
                group: ['input'],
                version: 1,
                subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
                description: 'Storage Cache offers scalable NAS caching from NFSv3 or Blob storage targets.',
                defaults: { name: 'Azure Storagecache' },
                usableAsTool: true,
                inputs: [NodeConnectionTypes.Main],
                outputs: [NodeConnectionTypes.Main],
                credentials: [
                        {
                                name: 'N8nDevAzureStoragecacheApi',
                                required: true,
                        },
                ],
                requestDefaults: {
                        baseURL: '={{\$credentials.url}}',
                        headers: {
                                Accept: 'application/json',
                                'Content-Type': 'application/json',
                        },
                },
                properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [],
			"default": ""
		},
		
                ],
        };
}

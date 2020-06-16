AWS_DEV_PROFILE = aws-dev

PREFIX = aws-jumpcloud exec $(AWS_DEV_PROFILE) --
REGION = us-west-2

deploy-development:
		$(PREFIX) sam deploy \
				--template-file "cfn-codepipeline..yml" \
				--stack-name admin-root-guild-admin-root-template \
				--capabilities CAPABILITY_IAM \
				--region $(REGION) \
				--parameter-overrides GithubRepo=guild-admin-root-template GithubBranch=testBranch

deploy-staging:
		$(PREFIX) sam deploy \
				--cfn-codepipeline.-file "cfn-codepipeline..yml" \
				--stack-name admin-root-guild-admin-root-template \
				--capabilities CAPABILITY_IAM \
				--region $(REGION) \
				--parameter-overrides GithubRepo=guild-admin-root-template GithubBranch=staging Environment=staging

deploy-production:
		$(PREFIX) sam deploy \
				--template-file "template.yml" \
				--stack-name admin-root-guild-admin-root-template \
				--capabilities CAPABILITY_IAM \
				--region $(REGION) \
				--parameter-overrides GithubRepo=guild-admin-root-template GithubBranch=production Environment=prod
source 'https://rubygems.org'

ruby '3.4.4'

##-- base gems for rails --##
gem 'rack-cors', '2.0.0', require: 'rack/cors'
gem 'rails', '~> 7.1'
gem 'bootsnap', require: false

##-- rails application helper gems --##
gem 'acts-as-taggable-on'
gem 'attr_extras'
gem 'browser'
gem 'hashie'
gem 'jbuilder'
gem 'kaminari'
gem 'responders', '>= 3.1.1'
gem 'rest-client'
gem 'telephone_number'
gem 'time_diff'
gem 'tzinfo-data'
gem 'valid_email2'
gem 'email-provider-info'
gem 'uglifier'
gem 'flag_shih_tzu'
gem 'haikunator'
gem 'liquid'
gem 'commonmarker'
gem 'json_schemer'
gem 'json_refs'
gem 'rack-attack', '>= 6.7.0'
gem 'down'
gem 'ssrf_filter', '~> 1.5'
gem 'gmail_xoauth'
gem 'net-smtp', '~> 0.3.4'
gem 'csv-safe'

##-- for active storage --##
gem 'aws-sdk-s3', require: false
# ✅ FIX: pointing to your public fork which patches faraday compatibility
gem 'azure-storage-blob', git: 'https://github.com/Sachin-kalaiselvan/azure-storage-ruby', branch: 'nixer', require: false
gem 'google-cloud-storage', '>= 1.48.0', require: false
gem 'image_processing'

##-- for actionmailbox --##
gem 'aws-actionmailbox-ses', '~> 0'

##-- gems for database --##
gem 'groupdate'
gem 'pg'
gem 'redis'
gem 'redis-namespace'
gem 'activerecord-import'

gem 'searchkick'
gem 'opensearch-ruby'
gem 'faraday_middleware-aws-sigv4'

##--- gems for server & infra configuration ---##
gem 'dotenv-rails', '>= 3.0.0'
gem 'foreman'
gem 'puma'
gem 'vite_rails'
gem 'barnes'

##--- gems for authentication & authorization ---##
gem 'devise', '>= 4.9.4'
# ✅ FIX: removed version constraint, pointing to your public fork
gem 'devise-secure_password', git: 'https://github.com/Sachin-kalaiselvan/devise-secure_password', branch: 'nixer'
gem 'devise_token_auth', '>= 1.2.3'
gem 'devise-two-factor', '>= 5.0.0'
gem 'jwt'
gem 'pundit'

gem 'administrate', '>= 0.20.1'
gem 'administrate-field-active_storage', '>= 1.0.3'
gem 'administrate-field-belongs_to_search', '>= 0.9.0'

##--- gems for pubsub service ---##
gem 'wisper', '2.0.0'

##--- gems for channels ---##
gem 'facebook-messenger'
gem 'line-bot-api'
gem 'twilio-ruby'
gem 'twitty', '~> 0.1.5'
gem 'koala'
gem 'slack-ruby-client', '~> 2.7.0'
gem 'google-cloud-dialogflow-v2', '>= 0.24.0'
gem 'grpc'
gem 'google-cloud-translate-v3', '>= 0.7.0'

##-- apm and error monitoring ---##
gem 'datadog', '~> 2.0', require: false
gem 'elastic-apm', require: false
gem 'newrelic_rpm', require: false
gem 'newrelic-sidekiq-metrics', '>= 1.6.2', require: false
gem 'scout_apm', require: false
gem 'sentry-rails', '>= 5.19.0', require: false
gem 'sentry-ruby', require: false
gem 'sentry-sidekiq', '>= 5.19.0', require: false

##-- background job processing --##
gem 'sidekiq', '>= 7.3.1'
gem 'sidekiq-cron', '>= 1.12.0'
gem 'sidekiq_alive'

##-- Push notification service --##
gem 'fcm'
gem 'web-push', '>= 3.0.1'

##-- geocoding --##
gem 'geocoder'
gem 'maxminddb'

gem 'hairtrigger'
gem 'procore-sift'
gem 'email_reply_trimmer'
gem 'html2text'
gem 'working_hours'
gem 'pg_search'

gem 'stripe', '~> 18.0'
gem 'faker'
gem 'lograge', '~> 0.14.0', require: false
gem 'omniauth-oauth2'
gem 'audited', '~> 5.4', '>= 5.4.1'
gem 'omniauth', '>= 2.1.2'
gem 'omniauth-saml'
gem 'omniauth-google-oauth2', '>= 1.1.3'
gem 'omniauth-rails_csrf_protection', '~> 1.0', '>= 1.0.2'

gem 'neighbor'
gem 'pgvector'
gem 'reverse_markdown'
gem 'iso-639'
gem 'ruby-openai'
gem 'ai-agents', '>= 0.9.1'
gem 'ruby_llm', '>= 1.8.2'
gem 'ruby_llm-schema'
gem 'cld3', '~> 3.7'

gem 'opentelemetry-sdk'
gem 'opentelemetry-exporter-otlp'
gem 'shopify_api'

group :production do
  gem 'rack-timeout'
  gem 'judoscale-rails', require: false
  gem 'judoscale-sidekiq', require: false
end

group :development do
  gem 'annotaterb'
  gem 'bullet'
  gem 'letter_opener'
  gem 'scss_lint', require: false
  gem 'web-console', '>= 4.2.1'
  gem 'squasher'
  gem 'rack-mini-profiler', '>= 3.2.0', require: false
  gem 'stackprof'
  gem 'meta_request', '>= 0.8.3'
  gem 'tidewave'
end

group :test do
  gem 'database_cleaner'
  gem 'webmock'
  gem 'test-prof'
  gem 'simplecov_json_formatter', require: false
end

group :development, :test do
  gem 'active_record_query_trace'
  gem 'brakeman'
  gem 'bundle-audit', require: false
  gem 'byebug', platform: :mri
  gem 'climate_control'
  gem 'debug', '~> 1.8'
  gem 'factory_bot_rails', '>= 6.4.3'
  gem 'listen'
  gem 'mock_redis'
  gem 'pry-rails'
  gem 'rspec_junit_formatter'
  gem 'rspec-rails', '>= 6.1.5'
  gem 'rubocop', require: false
  gem 'rubocop-performance', require: false
  gem 'rubocop-rails', require: false
  gem 'rubocop-rspec', require: false
  gem 'rubocop-factory_bot', require: false
  gem 'seed_dump'
  gem 'shoulda-matchers'
  gem 'simplecov', '>= 0.21', require: false
  gem 'skooma'
  gem 'spring'
  gem 'spring-watcher-listen'
end
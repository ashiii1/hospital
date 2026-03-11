#!/bin/bash

# IndexNow Submission Script for Dr.Demo Hospitals
# Instantly notify search engines about website updates

API_KEY="42d30eb996434c0ebf18a4e59f1a0d5f"
SITE_URL="https://www.Demohospitals.com"

# URLs to submit (add more URLs as needed)
URLS=(
  "${SITE_URL}/"
  "${SITE_URL}/about"
  "${SITE_URL}/services"
  "${SITE_URL}/doctors"
  "${SITE_URL}/facilities"
  "${SITE_URL}/testimonials"
  "${SITE_URL}/achievements"
  "${SITE_URL}/contact"
)

echo "🚀 Submitting URLs to IndexNow..."
echo "=================================="

# Submit to IndexNow API (used by Bing, Yandex, DuckDuckGo)
for url in "${URLS[@]}"; do
  echo "Submitting: $url"
  
  response=$(curl -s -X POST "https://api.indexnow.org/indexnow" \
    -H "Content-Type: application/json" \
    -d "{
      \"host\": \"www.Demohospitals.com\",
      \"key\": \"${API_KEY}\",
      \"keyLocation\": \"${SITE_URL}/${API_KEY}.txt\",
      \"urlList\": [\"${url}\"]
    }")
  
  if [ $? -eq 0 ]; then
    echo "✅ Success"
  else
    echo "❌ Failed: $response"
  fi
  
  # Be nice to the API - small delay between requests
  sleep 1
done

echo ""
echo "=================================="
echo "✅ Submission complete!"
echo ""
echo "📊 What happens next:"
echo "  • Bing: Updates in 3-5 days"
echo "  • Yandex: Updates in 2-4 days"
echo "  • DuckDuckGo: Updates in 5-7 days"
echo ""
echo "🔍 Check status in:"
echo "  • Bing Webmaster Tools: https://www.bing.com/webmasters"
echo "  • IndexNow Status: https://www.indexnow.org/status"


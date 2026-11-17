@echo off
rem klipler klasorundeki videolari bulup klipler.js dosyasini yeniden yazar.
cd /d "%~dp0"
if not exist klipler mkdir klipler
powershell -NoProfile -ExecutionPolicy Bypass -Command "$f = @(Get-ChildItem -LiteralPath 'klipler' -File | Where-Object { $_.Extension -match '^\.(mp4|webm|mov|m4v)$' } | Sort-Object Name); $o = @($f | ForEach-Object { [pscustomobject]@{ dosya = 'klipler/' + $_.Name; baslik = $_.BaseName } }); $j = ConvertTo-Json -InputObject $o -Depth 3; if ($o.Count -eq 0) { $j = '[]' }; [IO.File]::WriteAllText((Join-Path (Get-Location) 'klipler.js'), 'window.BRB_KLIPLER = ' + $j + ';', (New-Object Text.UTF8Encoding $false)); Write-Host ($o.Count.ToString() + ' klip bulundu.')"
echo.
echo klipler.js guncellendi. OBS'te tarayici kaynagini yenilemeyi unutma.
pause
